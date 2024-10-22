getAllUsers: (req, res) => [
  UserModel.findAllUsers({})
    .then((users) => {
      return res.status(200).json({
        status: true,
        data: users,
      });
    })
    .catch((err) => {
      return res.status(5000).json({
        status: false,
        error: err,
      });
    }),
];
