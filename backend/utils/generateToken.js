import jwt from 'jsonwebtoken'

const genToken = (id) => {
    let token
    return token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '10d' });
}

export default genToken;