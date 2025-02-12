# Breakdown of Technical Requirements for the Learning Platform

## 1. User Profile
- A user can be both a **learner** and a **course creator**.
- A user’s **wallet address** is used for authentication and transactions.
- Users can have courses they **created** and courses they are **enrolled in**.

### Profile Fields:
- **walletAddress**: Used for login (connected wallet).
- **createdCourses**: List of courses created.
- **enrolledCourses**: List of courses a user is taking.
- **status**: `Active`, `Inactive`, or `Suspended`.

---

## 2. Create Course
Users can create courses containing:

- **title**: Name of the course.
- **description**: Course overview.
- **modules**: An array containing video links.
- **creator**: The creator’s wallet address *(can be null for community-created courses)*.

---

## 3. Invite by Learner & Upvote/Downvote
- A learner can invite others to join a course.
- Users can **Upvote** or **Downvote** a learner based on their likelihood to complete the course.

### Voting System:
- **Upvote**: Staking support for the learner.
- **Downvote**: Staking against the learner.
- A **smart contract** will handle staking and distribute rewards.

---

## 4. Staking Feature
Each course has a **staking amount**:

- **Paid Courses**: Require a stake.
- **Free Courses**: Can be joined without staking.
- Staking is done using the **Circles Protocol**.

---

## 5. Learner’s Stake Pool
The **stake pool** is composed of:
- **Upvoters**: Staked on learner's success.
- **Downvoters**: Staked on learner’s failure.

### After the deadline:
- If the learner **completes** the course, **Upvoters win** and get rewarded.
- If the learner **fails**, **Downvoters win** and are rewarded.
- The **Circles Protocol** handles the staking mechanism.

---

## 6. Tech Stack

| Component          | Technology          |
|-------------------|-------------------|
| **Backend**      | Node.js           |
| **Language**     | TypeScript        |
| **Hosting**      | Railway           |
| **Database**     | MongoDB           |
| **Staking System** | Circles Protocol |
| **Wallet Integration** | Ethers.js|
| **Smart Contracts** | Solidity (for staking) |

