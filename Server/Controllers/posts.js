 import PostMessage from '../Models/postMessage.js';
 
 export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createPosts = (req, res) => {
    res.send('Post Creation');
}

