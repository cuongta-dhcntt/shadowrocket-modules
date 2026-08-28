// Meitu VIP - sua response users/show_current -> xiuxiu_vip = 1
let obj = JSON.parse($response.body);
const user = (obj.response && obj.response.user) || {};
const vip = user.vip || {};
vip.xiuxiu_vip = 1;
(vip.list || []).forEach(function (i) { i.status = 1; });
user.vip = vip;
const wf = user.wallet_flag || {};
wf.has_recharge = true;
user.wallet_flag = wf;
$done({ body: JSON.stringify(obj) });
