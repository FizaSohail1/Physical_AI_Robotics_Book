---
title: Fundamentals of Robotics
description: Basic principles of robot mechanics, kinematics, and control.
sidebar_position: 2
---

# Fundamentals of Robotics

## 2.1 Robot Anatomy: Manipulators, End-Effectors, Mobile Bases

Robots are complex machines designed to perform tasks autonomously or semi-autonomously. Understanding their basic anatomy is crucial to grasping how they function and interact with the world. While robot designs vary widely, most share common fundamental components:

**1. Manipulators (Robotic Arms):**
These are the "arms" of the robot, often resembling human arms in their articulated structure. Manipulators are designed to move and position end-effectors with precision. They consist of a series of rigid links connected by joints.
- **Links**: The rigid bodies that make up the robot arm (e.g., forearm, upper arm).
- **Joints**: Connect the links and allow for relative motion between them. Joints can be:
    - **Revolute (Rotary) Joints**: Allow rotational motion around an axis (like a human elbow or shoulder).
    - **Prismatic (Linear) Joints**: Allow linear motion along an axis (like a telescoping mechanism).

**2. End-Effectors:**
Attached to the "end" of a manipulator, end-effectors are the tools that interact directly with the environment or perform the desired task. Their design is highly dependent on the application.
- **Grippers**: Mechanical devices that grasp and hold objects. They can be simple two-finger designs or complex multi-fingered hands.
- **Tools**: Specialized instruments for tasks like welding, painting, drilling, or even surgical operations.
- **Sensors**: Sometimes, an end-effector might primarily be a sensor, like a camera for inspection or a force sensor for delicate tasks.

**3. Mobile Bases (Locomotion Systems):**
These components provide the robot's ability to move within its environment. Not all robots have mobile bases (e.g., fixed industrial arms), but for those that do, the design varies based on mobility requirements.
- **Wheeled Systems**: Common for ground-based robots, offering speed and efficiency on flat surfaces. Examples include differential drive, skid-steer, and omnidirectional wheels.
- **Legged Systems**: Provide greater flexibility and ability to navigate rough terrain, stairs, or obstacles. This includes bipedal (two-legged, like humanoids), quadrupedal (four-legged), and hexapedal (six-legged) designs.
- **Tracked Systems**: Similar to tank treads, offering good traction and stability on uneven surfaces.
- **Aerial Systems**: Drones and other flying robots use propellers or jets for locomotion.

**4. Controllers:**
Often housed separately or integrated within the robot's body, the controller is the "brain" that processes information from sensors, executes programmed commands, and sends signals to actuators to perform movements. It manages the robot's behavior, path planning, and interaction logic.

**5. Power System:**
Supplies energy to all robot components. This could be batteries for mobile robots, or direct connection to a power grid for stationary industrial robots.

## 2.2 Degrees of Freedom and Joints

To understand how a robot moves and interacts with its environment, it is essential to grasp the concepts of Degrees of Freedom (DOF) and the types of joints that enable these movements.

**Degrees of Freedom (DOF):**
Degrees of Freedom refer to the number of independent parameters that define the configuration or state of a mechanical system. In robotics, it typically refers to the number of independent motions a robot can make. Each joint in a robot arm, for instance, adds one or more DOFs.

- **Translational DOF**: Movement along an axis (e.g., up/down, left/right, forward/backward).
- **Rotational DOF**: Rotation around an axis (e.g., pitch, roll, yaw).

A rigid body in 3D space has six degrees of freedom: three for translation (x, y, z) and three for rotation (around x, y, and z axes). A robot's total DOF determines its dexterity and ability to reach different points and orientations in its workspace.

**Types of Joints (Revisited):**
Joints are the connections between rigid links that allow relative motion. The type of joint directly dictates the DOF it contributes.

- **Revolute (R) Joint**: Provides one rotational DOF. Think of a hinge or a shoulder joint. It allows rotation about a single axis.
    - _Example_: The elbow joint of a human arm, or the base rotation of an industrial robot.
- **Prismatic (P) Joint**: Provides one translational DOF. Think of a piston or a telescoping mechanism. It allows linear motion along a single axis.
    - _Example_: The extension of a linear actuator, or the vertical movement of a robot's torso.

**Kinematic Chains:**
Robot manipulators are often described as kinematic chains, which are a series of links connected by joints. These chains can be:

- **Open Kinematic Chain**: A series of links and joints where one end is fixed (the base) and the other end is free (the end-effector). Most robotic arms are open kinematic chains.
- **Closed Kinematic Chain**: A system where multiple paths connect links, forming one or more closed loops. Parallel manipulators (e.g., Stewart platforms) are examples of closed kinematic chains, offering high stiffness and precision.

The arrangement and types of joints in a robot's kinematic chain directly influence its workspace (the reachable area) and its maneuverability. A robot with more DOFs generally has greater flexibility but also increased complexity in control.