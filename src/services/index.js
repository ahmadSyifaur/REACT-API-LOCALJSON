import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

const getNewBlog =()=> GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog =(dataYgDikirim)=>PostAPI('posts',dataYgDikirim);
const deleteNewsBlog =(dataYgDihapus)=>DeleteAPI('posts',dataYgDihapus);

const API={
    getNewBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;