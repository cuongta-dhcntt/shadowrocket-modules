// Meitu VIP - mo khoa toan bo func_limit_batch_query
let obj = JSON.parse($response.body);
(obj.response.items || []).forEach(function (item) {
  item.limit_flag = 0;
  item.free_num = -1;
  item.total_num = -1;
  item.total_limit_num = 0;
  item.use_num = 0;
  item.total_use_num = 0;
  item.motivate_num = 0;
  item.share_limit_left_num = 999;
  item.subscribe_banner = {};
});
$done({ body: JSON.stringify(obj) });
