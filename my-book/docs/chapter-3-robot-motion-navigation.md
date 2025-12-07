---
title: Robot Motion & Navigation
description: Learn how robots plan paths, localize themselves, build maps, and execute stable locomotion, especially for humanoids.
sidebar_position: 5
---

# Robot Motion & Navigation

Once a robot can perceive its environment (Chapter 4), the next critical step is to enable it to move purposefully and navigate effectively. This chapter covers the core algorithms and techniques for robot motion planning, localization, mapping, and the specialized challenges of humanoid locomotion.

## Path Planning Algorithms

**Path planning** is the process of finding a sequence of movements that takes a robot from a starting configuration to a target configuration while avoiding obstacles and respecting constraints.

*   **Global vs. Local Planning:**
    *   **Global Planning:** Computes a complete path from start to goal based on a known map of the environment. Often computationally intensive and requires an accurate map.
    *   **Local Planning:** Generates immediate actions to react to unmapped obstacles or dynamic changes in the environment. Usually faster but can get stuck in local minima.

*   **Grid-based Search Algorithms:**
    *   **Dijkstra's Algorithm:** Finds the shortest path between nodes in a graph, but can be slow for large grids as it explores all possible directions.
    *   **A* Search Algorithm:** An extension of Dijkstra's that uses a **heuristic function** to guide the search towards the goal, making it much more efficient. It finds the shortest path while exploring fewer nodes.
        *   **Heuristic:** An educated guess about the remaining cost to reach the goal (e.g., Euclidean distance or Manhattan distance). The heuristic must be admissible (never overestimates the cost) for A* to guarantee optimality.

*   **Sampling-based Algorithms:**
    *   **Rapidly-exploring Random Trees (RRT/RRT*):** Build a tree of possible paths by randomly sampling points in the configuration space and extending the tree towards them. Effective for high-dimensional spaces and complex obstacles. RRT* improves optimality.
    *   **Probabilistic Roadmaps (PRM):** Constructs a roadmap (graph) by randomly sampling points and connecting them if a collision-free path exists between them. Once the roadmap is built, pathfinding becomes a graph search problem.

### Diagram 5.1: Grid-based Path Planning (A* Concept)

```
        Start [S] . . . . .
        . . X X . .
        . . X G . .
        . . X . . .
        . . . . . .
        X = Obstacle
        G = Goal
        Arrows would show the path explored/found.
```
*Description: A 2D grid map representing an environment with a start point [S], a goal point [G], and obstacles denoted by [X]. The illustration conceptually depicts how a path planning algorithm like A* would navigate through the grid, expanding its search and finding an optimal collision-free path from S to G.*

## Motion Control and Trajectory Generation

After a path is planned, the robot needs to execute it smoothly and precisely.
*   **Trajectory Generation:** Converting a static path into a time-parameterized sequence of joint positions, velocities, and accelerations that the robot can follow. This ensures smooth movement and avoids jerky motions that could damage the robot or objects.
*   **Feedback Control:** (Revisited from Chapter 2) Lower-level control loops (like PID) are used at each joint to ensure the actual joint positions and velocities match the commanded trajectory.

## Localization: Knowing Where You Are

**Localization** is the process of determining a robot's position and orientation within a known map.

*   **Odometry:** Estimates position by integrating wheel encoder readings or joint angles over time. Simple and fast, but prone to cumulative errors (drift) due to wheel slippage or measurement noise.
    *   **Pseudocode for simple 2-wheel differential drive odometry:**
        ```pseudocode
        // Initial state
        x = 0
        y = 0
        theta = 0 // Orientation (heading)

        // Robot parameters
        wheel_radius = R
        wheel_base = L // Distance between wheels

        // In a loop (at time step dt):
        function update_odometry(left_encoder_delta, right_encoder_delta, dt):
            // Convert encoder deltas to wheel distances
            dist_left = left_encoder_delta * (2 * PI * wheel_radius / encoder_ticks_per_rev)
            dist_right = right_encoder_delta * (2 * PI * wheel_radius / encoder_ticks_per_rev)

            // Calculate instantaneous center of robot movement
            delta_dist = (dist_left + dist_right) / 2
            delta_theta = (dist_right - dist_left) / L

            // Update state
            x = x + delta_dist * cos(theta + delta_theta / 2)
            y = y + delta_dist * sin(theta + delta_theta / 2)
            theta = theta + delta_theta
        ```
*   **Global Positioning System (GPS):** Provides absolute position outdoors, but suffers from inaccuracies, requires line-of-sight to satellites, and doesn't work indoors.
*   **Beacon-based Localization:** Uses fixed transmitters (beacons) and signal strength or time-of-flight measurements to triangulate the robot's position.
*   **Bayesian Localization:**
    *   **Markov Localization:** Represents the robot's belief about its position as a probability distribution over the map. Updates this belief using sensor observations and motion models.
    *   **Monte Carlo Localization (MCL) / Particle Filters:** A popular implementation of Markov Localization that uses a set of weighted "particles" (hypothesized robot poses) to represent the probability distribution. Particles are updated based on motion and sensor models.

## Mapping: Building a World Model

**Mapping** is the process of constructing a representation of the environment.

*   **Occupancy Grids:** The most common map representation, dividing the environment into a grid of cells, each storing a probability of being occupied by an obstacle.
*   **Feature-based Maps:** Represent the environment using a collection of distinct landmarks or features.
*   **Topological Maps:** Represent the environment as a graph of nodes (places) and edges (paths between places), often used for high-level navigation.

## Simultaneous Localization and Mapping (SLAM)

**SLAM** is arguably one of the most fundamental and challenging problems in robotics. It's the chicken-and-egg problem: a robot needs a map to localize itself, but it needs to localize itself to build a map. SLAM algorithms solve both problems simultaneously, often using sensor data (Lidar, cameras, IMUs) to iteratively refine both the robot's pose estimate and the map of its surroundings.

### Diagram 5.2: SLAM Overview (Conceptual Loop)

```
        +-----------------+     +-----------------+
        |  Robot Sensors  |---->|   Perception    |
        | (e.g., Lidar)   |     | (Features, Data)|
        +-----------------+     +-----------------+
                 |                         |
                 |                         V
                 |    +-----------------+  <---> +------------+
                 +---->|   Localization  |<----->|   Mapping  |
                       | (Where am I?)   |       | (Build Map)|
                       +-----------------+       +------------+
                 ^                         |
                 |                         V
                 |    +-----------------+
                 +----|  Motion Control   |
                      | (Move to goal)  |
                      +-----------------+
```
*Description: A conceptual loop illustrating the Simultaneous Localization and Mapping (SLAM) problem, showing the interaction between robot sensors, perception, localization, mapping, and motion control. The robot builds a map while simultaneously figuring out its position within that map.*

## Gait Generation & Stability Control for Humanoids

Bipedal locomotion (walking on two legs) is inherently unstable and incredibly complex compared to wheeled or quadrupedal motion.

*   **Gait Generation:** Designing the sequence of joint motions (foot placements, leg swings, body postures) that produce stable and efficient walking.
    *   **Static Gaits:** Robot moves slowly enough that its center of mass always remains within its support polygon (area defined by feet on the ground). Simpler but slow and less human-like.
    *   **Dynamic Gaits:** Robot's center of mass moves outside its support polygon during walking, relying on continuous feedback and momentum to maintain balance. More efficient and human-like.
*   **Zero Moment Point (ZMP) (Revisited):** A fundamental concept for bipedal stability. A stable gait ensures the ZMP always stays within the convex hull of the robot's contact points with the ground (i.e., its feet).
*   **Balancing & Stability Control:**
    *   **Inverse Pendulum Model:** A common simplification used to model the dynamics of a bipedal robot during walking, helping to design balance controllers.
    *   **Center of Mass (CoM) Control:** Actively shifting the robot's CoM to maintain balance or initiate steps.
    *   **Momentum Control:** Using the robot's angular and linear momentum to absorb disturbances and maintain stability during dynamic movements.
    *   **Whole-Body Control (WBC):** A sophisticated approach that considers all of the robot's joints and end-effectors simultaneously to achieve a desired task (e.g., walking while carrying an object) while maintaining balance and avoiding joint limits.

## Learning Outcomes (Chapter 5)

By the end of this chapter, you should be able to:
*   Describe the difference between global and local path planning.
*   Explain the working principles of A* and RRT algorithms.
*   Compare and contrast odometry, GPS, and Bayesian localization methods.
*   Understand the fundamental challenge and conceptual solution of SLAM.
*   Differentiate between static and dynamic gaits for humanoids.
*   Explain how ZMP and Center of Mass control contribute to bipedal stability.

## Practical Exercises

### Exercise 5.1: A* Search Path Tracing

Consider the following 5x5 grid map, where 'S' is the start, 'G' is the goal, and 'X' represents obstacles.
```
S . . . .
. X . X .
. X . G .
. . . X .
. . . . .
```
1.  Assume the robot can move horizontally and vertically (4-connectivity).
2.  Using Manhattan distance as a heuristic (H), conceptually trace the path an A* algorithm would explore to find the shortest path from S to G.
3.  Indicate the shortest path found.

### Exercise 5.2: Odometry Calculation

A differential drive robot has `wheel_radius = 0.05` meters and `wheel_base = 0.2` meters. Its encoders report total ticks. Assume `encoder_ticks_per_rev = 360` (1 degree per tick).
At `t=0`, robot is at `(x=0, y=0, theta=0)`.
Between `t=0` and `t=1s`: `left_encoder_delta = 36` ticks, `right_encoder_delta = 72` ticks.
1.  Calculate `dist_left` and `dist_right` for this 1-second interval.
2.  Use the `update_odometry` pseudocode to calculate the robot's new `(x, y, theta)` at `t=1s`.

## Short Review Questions

1.  What is a major advantage of using a sampling-based path planner (like RRT) over a grid-based planner (like A*) for high-dimensional robotic systems?
2.  Why is a simple odometry system prone to accumulating errors over longer distances?
3.  Explain the "chicken-and-egg" problem that Simultaneous Localization and Mapping (SLAM) aims to solve.
4.  What is the primary difference in how a robot maintains balance during a "static gait" versus a "dynamic gait"?
5.  How does the concept of the "Inverse Pendulum Model" simplify the problem of controlling humanoid robot balance?
