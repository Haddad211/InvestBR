
const express=require("express");
const router=express.Router();
const investorController=require("../src/investor/investorController");
const innovaterController=require("../src/innovater/innovaterController");
const LoginController=require("../src/service/login");
const showall=require('../src/admin/showall');
const findbyname=require('../src/admin/search');
const dell=require('../src/admin/delluser');
const searchbyid=require('../src/admin/searchbyid')
const accept=require('../src/admin/accept');
const showaccepted=require('../src/admin/showaccepted');
const adminController=require('../src/admin/addamin/adminController');
const countall=require('../src/admin/userscount');
const post=require('../src/Poste/posteController')
const getpost=require('../src/Poste/getpost')
const imageController=require('../src/images/imageController')
const friendship=require('../src/FriendshipInvitation/friendshipController')
const getfrienship=require('../src/FriendshipInvitation/getfriendshipController')
const setStatus=require('../src/FriendshipInvitation/friendshipStatus');
const accepted=require('../src/FriendshipInvitation/Acceptedfriendship');
const rejected=require('../src/FriendshipInvitation/Rejectedfreindship');
const sendmessage=require('../src/Message/messageinvestorController');
const recmessage=require('../src/Message/messageinnovatorController')
const getmessage=require('../src/Message/getmessages');
const waitingfriendship=require('../src/FriendshipInvitation/getfriendshipinvestor');
const delfriendship=require('../src/FriendshipInvitation/delfriendshipsend');
const innovatorstat=require('../src/statistic/innovatorprofile');
const investorstat=require('../src/statistic/investorprofile');
const innovatornotif=require('../src/Notification/notificationController')
router.route('/user/create/investor').post(investorController.createInvestorControllerFn);
router.route('/user/create/innovater').post(innovaterController.createInnovaterControllerFn);
router.route('/investor/profile/:id').get(investorController.findInvestorByIdControllerFn)
router.route('/innovator/profile/:id').get(innovaterController.findInnovatorByIdControllerFn);
router.route('/innovator/update/:id').put(innovaterController.updateInnovatorControllerFn);
router.route('/investor/update/:id').put(investorController.updateInvestorControllerFn);
router.route('/friendshipInvitations/:id').post(friendship.friendshipInvitations);
router.route('/friendshipInvitations/innovator/:id').get(getfrienship.getFriendshipInvitationsForInnovator);
router.route('/friendshipInvitations/status/:id').put(setStatus.setStatusFriendshipInvitation);
router.route('/friendshipAccepted/innovator/:id').get(accepted.getFriendshipAcceptedForInnovator);
router.route('/friendshipAccepted/investor/:id').get(accepted.getFriendshipAcceptedForInvestor);
router.route('/friendshipRejected/innovator/:id').get(rejected.getFriendshipRejectedForInnovator);
router.route('/friendshipAccepted/invest/:id').get(waitingfriendship.getFriendshipsendlsit);
router.route('/friendshipdel/invest/:id').delete(delfriendship.delfriendshipsend);
router.route('/innovator/post/:id').post(post.addPost);
router.route('/investor/search').post(post.searchPost);
router.route('/user/posts').get(getpost.getPosts);
router.route('/innovator/dellpost').delete(post.dellpost);
router.route('/innovator/listposts/:id').get(getpost.listofposts);
router.route('/Admin/create/Admin').post(adminController.createAdminControllerFn);
router.route('/user/login').post(LoginController.loginControllerFn);
router.route('/admin/showall').get(showall.getAllUsers);
router.route('/admin/search').get(findbyname.getUsersByName);
router.route('/admin/dell/:id').delete(dell.deleteUser);
router.route('/admin/searchbyid').get(searchbyid.getUserById);
router.route('/admin/approve/:id').put(accept.approveUser);
router.route('/admin/showaccepted').get(showaccepted.getAcceptedUsers);
router.route('/admin/countall').get(countall.dashboardControllerFn);
router.route('/image').post(imageController.uploadImage);
router.route('/user/images').get(imageController.getAllImages);
router.route('/investor/sendmessage/:id').post(sendmessage.sendInvestorMessage);
router.route('/innovator/sendmessage/:id').post(recmessage.sendInnovatorMessage);
router.route('/sender/messages/:senderId/:receiverId').get(getmessage.getSenderMessages);
router.route('/receiver/messages/:senderId/:receiverId').get(getmessage.getReceiverMessages);
router.route('/innovator/stat/:id').get(innovatorstat.viewfriendsandposts);
router.route('/investor/stat/:id').get(investorstat.viewfriends);
router.route('/innovator/notif/:id').post(innovatornotif.getnotification);
router.route('/innovator/notif/:id').get(innovatornotif.getnbnotification);
router.route('/innovator/notif/clear/:id').put(innovatornotif.clearnotifications);
router.route('/investor/notif/:id').get(innovatornotif.getnbnotificationforinvesotr);
router.route('/investor/notif/clear/:id').put(innovatornotif.clearnotificationsforinvestor);
router.route('/investor/notif').post(innovatornotif.getnotificationforinvestor);
router.route('/investor/getTopFourBranches').get(investorstat.getTopFourBranches);
router.route('/investor/getTopThreePosts').get(investorstat.getTopThreePosts);
router.route('/investor/LastThreePostsByBranch/:id').get(investorstat.getLastThreePostsByBranch);
module.exports=router;