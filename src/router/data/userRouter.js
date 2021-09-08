import Detail from '../../pages/user/detail/index.vue';
import design from '../../pages/user/design/index.vue';
const userRouter = [{
  name: 'design',
  path: 'design',
  component: design,
}, {
  name: 'detail',
  path: 'detail',
  component: Detail,
}];
export default userRouter;