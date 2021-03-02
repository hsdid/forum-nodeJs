module.exports = (postRepository) => {

    async function Execute(postId) {
        const post = await postRepository.findOne(postId);
        if (!post) return 'Something went wrong';
        
        return post;
        
    }

    return {
        Execute
    }
}


