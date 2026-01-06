const User = require("../models/user.model");
const { clerkClient } = require("@clerk/express");

const syncUser = async (req, res) => {
  try {
    console.log("sync user start");

    // NEW Clerk API (no deprecation)
    const { userId } = req.auth();

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    let user = await User.findOne({ clerkUserId: userId });

    if (!user) {
      const clerkUser = await clerkClient.users.getUser(userId);

      user = await User.create({
        clerkUserId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        username: clerkUser.username || `user_${userId.slice(0, 8)}`, // IMPORTANT
        userFullname: `${clerkUser.firstName || ""} ${
          clerkUser.lastName || ""
        }`,
        profileImage: clerkUser.imageUrl,
      });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error("SYNC USER ERROR:", err);
    return res.status(500).json({
      message: "User sync failed",
      error: err.message,
    });
  }
};

module.exports = { syncUser };
