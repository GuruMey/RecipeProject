import UserModel from "../models/UserModel.js";
import Joi from "joi";
import bcrypt from "bcrypt";



//----------------- CREATE USER ----------------- //

const createUser = async (req, res) => {

    //Validation schema for user data
    const userModel= Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required(),
        admin: Joi.boolean().default(false).valid(false , true),
        createdAt: Joi.date(),
        profilePicture: Joi.string(),
    });

    try {
        const {error} = userModel.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        const {username, password, email, admin, createdAt, profilePicture} = req.body;

        const found = UserModel.findOne({email});

        if (found) {
            return res.status(400).json({message: 'Email already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            username,
            password: hashedPassword,
            email,
            admin,
            createdAt,
            profilePicture
        });

        return res.status(201).json({data: newUser});

    } catch (error) {
        next(error);
    }
};

//----------------- GET ALL USERS (with pagination) ----------------- //
const getAllUsers = async (req, res) => {
    try {
        const {page = 1, limit = 25} = req.query;

        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            select: '-password -',

        }

         const users = await UserModel.paginate({}, options);

        const userFixed = {... userModel};
        userModel.data = usersFixed.docs;
        delete usersFixed.docs;

        return res.status(200).json(users);


    } catch (error) {
        next(error);
    }
};

//----------------- GET USER BY ID ----------------- //
const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId).select('-password');
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json({data: user});
    } catch (error) {
        next(error);
    }
};

//----------------- EDIT USER ----------------- //
const editUser = async (req, res) => {
    const receivedUserId = req.params.userId;
    const fieldValuesToUpdate = req.body.fieldValuesToUpdate;

    // todo: validate fieldValuesToUpdate

    //Validation schema for user data
    const userModel= Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required(),
        admin: Joi.boolean().default(false).valid(false , true),
        createdAt: Joi.date(),
        profilePicture: Joi.string(),
    });

    try {
        const {error} = userModel.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        const {username, password, email, admin, createdAt, profilePicture} = req.body;

        const found = userModel.findOne({email});


        let editUser;
        if (password!=='') {
            const hashedPassword = await bcrypt.hash(password, 10);
            editUser = await UserModel.findByIdAndUpdate(
              req.params.id,
            {
                username,
                password: hashedPassword,
                email,
                admin,
                createdAt,
                profilePicture,
            },
            {new: true}
        ).select('-password');
        } else {
            editUser = await UserModel.findByIdAndUpdate(
                req.params.id,
                {
                    username,
                    email,
                    admin,
                    createdAt,
                    profilePicture,
                },
                {new: true}
            ).select('-password');
        };

        if (!editUser) {
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json({data: editUser});
    } catch (error) {
        next(error);
    }
        };


//----------------- DELETE USER ----------------- //
const deleteUser = async (req, res) => {

    try {
        const deletedUser = await UserModel.findByIdAndRemove(req.params.userId);
        if (!deletedUser) {
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        next(error);
    }
}
//     const userId = req.params.userId;
//
//     try {
//         const existingUser = await UserModel.findByIdAndRemove(userId);
//
//         if (!existingUser) {
//             return res.status(404).json({ message: "Cannot find user" });
//         }
//
//         res.status(200).json({ message: "User deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error in user deletion" });
//     }
// };


export {editUser, deleteUser, getAllUsers, getUserById, createUser};
