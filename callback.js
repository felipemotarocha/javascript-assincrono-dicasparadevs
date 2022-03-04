const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError(new Error("error in login!"));
    }

    console.log("user logged!");
    onSuccess({ email });
  }, 1500);
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
};

const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: "video title" });
  }, 2500);
};

const user = loginUser(
  "felipe@gmail.com",
  "123456",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log({ videos });
      getVideoDetails(videos[0], (videoDetails) => {
        console.log({ videoDetails });
      });
    });
  },
  (error) => {
    console.log({ error });
  }
);

// console.log({ user });
