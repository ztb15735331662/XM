<?php
  // 获得当前页
  $page = $_REQUEST['p'];
  // 模拟从数据库读出的数据
  $arr = [
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/161.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/162.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/163.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/164.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/165.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/166.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/167.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/168.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/169.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/170.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/171.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/172.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/173.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/174.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/175.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/176.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/177.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/178.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/179.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/181.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/182.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/183.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/184.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/185.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/186.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/187.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/188.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/189.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/190.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/191.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/192.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/193.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/194.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/195.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/196.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/197.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/198.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/199.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/200.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/201.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/202.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/203.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/204.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/205.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/206.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/207.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/208.jpg"),
       array("id"=>'¥3999.00',"title"=>"华为手机Mate20 X (EVR-AL00) 6GB+128GB 麒麟980芯片全面屏","pic"=>"assets/images/209.jpg"),
  ];
  // 所有数据：echo json_encode($arr);
  /*
    每页显示 12条件数华为手机Mate20 RS (LYA-AL00P) 8GB+512GB 全网通 保时捷设计   瑞红
     第一页 1-12 数据(索引0-11)
     第二页 13-24 数据(索引12-23)
     第三页 25-36 数据(索引24-35)
  */ 
  $offset = ($page-1)*8; //索引
  $length = 8;
  echo json_encode(array_slice($arr,$offset,$length));
?>