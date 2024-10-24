getAllUsers: (req, res) => {
    UserModel.findAllUsers({}).then((users) => {
        return res.status(200).json({
            
        })
    })
}