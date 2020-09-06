import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_KEY;
const CODE = 200;
const USERS = [
  {
    id: 1,
    email: 'example1@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 2,
    email: 'example2@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 3,
    email: 'example3@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 4,
    email: 'example4@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
];

export default (req, res) => {
  const { method } = req;
  let message = {};
  try {
    switch (method) {
      case 'POST':
        /* Get Post Data */
        const { email, password } = req.body;
        // /* Any how email or password is blank */
        if (!email || !password) {
          return res.status(400).json({
            status: 'error',
            error: 'Request missing username or password',
          });
        }
        /* Check user email in database */
        const user = USERS.find(user => {
          return user.email === email;
        });
        /* Check if exists */
        if (!user) {
          res.status(400).json({ status: 'error', error: 'User Not Found' });
        }
        /* Define variables */
        const userId = user.id,
          userEmail = user.email,
          userPassword = user.password;
        /* Check and compare password */
        bcrypt.compare(password, userPassword).then(isMatch => {
          /* User matched */
          if (isMatch) {
            /* Create JWT Payload */
            const payload = {
              id: userId,
              email: userEmail,
            };
            /* Sign token */
            jwt.sign(
              payload,
              KEY,
              {
                expiresIn: 31556926, // 1 year in seconds
              },
              (err, token) => {
                res.status(200).json({
                  success: true,
                  token: 'Bearer ' + token,
                });
              },
            );
          } else {
            res
              .status(400)
              .json({ status: 'error', error: 'Password incorrect' });
          }
        });
        message = { user };
        break;
      case 'PUT':
        message = { put: true };
        break;
      case 'PATCH':
        message = { patch: true };
        break;
      default:
        message = { get: true };
    }
    res.statusCode = CODE;
    res.json({ message });
  } catch (error) {
    throw error;
  }
};
