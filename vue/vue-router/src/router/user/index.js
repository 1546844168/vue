import User from './../../components/user/user'
import UserProfile from './../../components/user/userProfile'

export default {
    path: '/user/:id',
    component: User,
    props: true,
    name: 'user',
    children: [
        {
            // 当 /user/:id/profile 匹配成功，
            // UserProfile 会被渲染在 User 的 <router-view> 中
            path: 'profile',
            component: UserProfile
        },
        /*{
            // 当 /user/:id/posts 匹配成功
            // UserPosts 会被渲染在 User 的 <router-view> 中
            path: 'posts',
            component: UserPosts
        }*/
    ]
}

