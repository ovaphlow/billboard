/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100206
Source Host           : localhost:3306
Source Database       : billboard

Target Server Type    : MYSQL
Target Server Version : 100206
File Encoding         : 65001

Date: 2018-06-21 20:55:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `corporation` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES ('3', '1', '1', 'haha', 'adress', 'corporation', 'phone', 'email');
INSERT INTO `company` VALUES ('4', '2', 'c4ca4238a0b923820dcc509a6f75849b', '111111', null, null, null, null);

-- ----------------------------
-- Table structure for education_experience
-- ----------------------------
DROP TABLE IF EXISTS `education_experience`;
CREATE TABLE `education_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school` varchar(255) DEFAULT NULL COMMENT '毕业院校',
  `qualifications` varchar(255) DEFAULT NULL COMMENT '学位学历',
  `intake` varchar(255) DEFAULT NULL COMMENT '入学时间',
  `graduation_time` varchar(255) DEFAULT NULL COMMENT '毕业时间',
  `major_name` varchar(255) DEFAULT NULL COMMENT '专业名称',
  `userId` int(11) DEFAULT NULL COMMENT '用户Id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of education_experience
-- ----------------------------
INSERT INTO `education_experience` VALUES ('5', '121', '123', '12341', '2131', '21312', '1');
INSERT INTO `education_experience` VALUES ('6', '121', '123', '12341', '2131', '21312', '1');
INSERT INTO `education_experience` VALUES ('7', '121', '123', '12341', '2131', '21312', '1');
INSERT INTO `education_experience` VALUES ('8', '1', '2', '3', '4', '5', '1');
INSERT INTO `education_experience` VALUES ('9', '1', '2', '3', '4', '5', '1');
INSERT INTO `education_experience` VALUES ('10', '1', '2', '3', '4', '5', '1');
INSERT INTO `education_experience` VALUES ('11', '6', '7', '8', '9', '2', '1');
INSERT INTO `education_experience` VALUES ('12', '1', '2', '3', '4', '5', '1');
INSERT INTO `education_experience` VALUES ('13', '1', '2', '3', '4', '5', '1');
INSERT INTO `education_experience` VALUES ('14', '1', '2', '3', '4', '5', '1');

-- ----------------------------
-- Table structure for favorite
-- ----------------------------
DROP TABLE IF EXISTS `favorite`;
CREATE TABLE `favorite` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(36) NOT NULL DEFAULT '',
  `user` char(36) NOT NULL DEFAULT '',
  `type` varchar(10) NOT NULL DEFAULT '' COMMENT '招聘，求职',
  `create_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `item_id` (`item`),
  KEY `user_id` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='收藏';

-- ----------------------------
-- Records of favorite
-- ----------------------------

-- ----------------------------
-- Table structure for img
-- ----------------------------
DROP TABLE IF EXISTS `img`;
CREATE TABLE `img` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `img_url` varchar(256) DEFAULT 'NULL' COMMENT '图片地址',
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  `create_time` datetime DEFAULT current_timestamp(),
  `update_time` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `IMG_ID_index` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='009-图片表 by kill8368';

-- ----------------------------
-- Records of img
-- ----------------------------

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` char(36) NOT NULL DEFAULT '',
  `user_uuid` char(36) NOT NULL DEFAULT '',
  `category` varchar(20) NOT NULL DEFAULT '',
  `city` varchar(20) NOT NULL DEFAULT '',
  `district` varchar(20) NOT NULL DEFAULT '',
  `user` varchar(50) NOT NULL DEFAULT '',
  `date` date NOT NULL DEFAULT '0001-01-01',
  `time` time NOT NULL DEFAULT '00:00:00',
  `title` varchar(50) NOT NULL DEFAULT '',
  `content` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uuid` (`uuid`),
  KEY `category` (`category`),
  KEY `city` (`city`),
  KEY `district` (`district`),
  KEY `user_uuid` (`user_uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job
-- ----------------------------
INSERT INTO `job` VALUES ('1', '1', '1', '1', '1', '1', '1', '0001-01-01', '00:00:00', '', '1');

-- ----------------------------
-- Table structure for platform_news
-- ----------------------------
DROP TABLE IF EXISTS `platform_news`;
CREATE TABLE `platform_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `uuid` char(36) NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL DEFAULT 0 COMMENT '消息所属用户ID',
  `category` varchar(20) NOT NULL DEFAULT '',
  `district` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `city` varchar(20) NOT NULL DEFAULT '',
  `title` varchar(30) NOT NULL DEFAULT '' COMMENT '消息标题',
  `img_flag` tinyint(4) unsigned NOT NULL DEFAULT 0,
  `top_flag` tinyint(4) unsigned NOT NULL DEFAULT 0,
  `top_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `content` text DEFAULT NULL COMMENT '文字内容',
  `create_time` datetime NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `platform_news_uuid_idx` (`uuid`) USING BTREE,
  KEY `platform_news_user_id_idx` (`user_id`) USING BTREE,
  KEY `city` (`city`),
  KEY `district` (`district`),
  KEY `category` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='004-平台消息表(帖子) by kill8268';

-- ----------------------------
-- Records of platform_news
-- ----------------------------

-- ----------------------------
-- Table structure for platform_news_comment
-- ----------------------------
DROP TABLE IF EXISTS `platform_news_comment`;
CREATE TABLE `platform_news_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_id` int(11) NOT NULL DEFAULT 0 COMMENT '消息ID',
  `user_id` int(11) NOT NULL DEFAULT 0 COMMENT '评论用户ID',
  `content` text DEFAULT NULL COMMENT '评论内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='006-消息回复 by kill8268';

-- ----------------------------
-- Records of platform_news_comment
-- ----------------------------

-- ----------------------------
-- Table structure for platform_news_img
-- ----------------------------
DROP TABLE IF EXISTS `platform_news_img`;
CREATE TABLE `platform_news_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `platform_news_id` int(11) DEFAULT NULL COMMENT '消息ID',
  `img_id` int(11) DEFAULT NULL COMMENT '图片ID',
  `create_time` datetime DEFAULT current_timestamp(),
  `update_time` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `PLATFORM_NEWS_IMG_ID_index` (`id`),
  KEY `PLATFORM_NEWS_IMG_PLATFORM_NEWS_ID_index` (`platform_news_id`),
  KEY `PLATFORM_NEWS_IMG_IMG_ID_index` (`img_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='005-消息图片表 by kill8268';

-- ----------------------------
-- Records of platform_news_img
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `uuid` char(36) NOT NULL DEFAULT '',
  `account` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名称(nickName)',
  `password` char(32) NOT NULL DEFAULT '',
  `nickname` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL DEFAULT '',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '所在城市',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '所在省份',
  `country` varchar(30) NOT NULL DEFAULT '' COMMENT '所在国家',
  `language` varchar(5) NOT NULL DEFAULT '' COMMENT '用户语言 中文:zh_CN 繁体:zh_TW 英文:en',
  `avatar_url` text DEFAULT NULL,
  `create_time` datetime NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_uuid_idx` (`uuid`) USING BTREE,
  KEY `user_account_idx` (`account`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='001-用户基本系信息表 by kill_8268';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', '1', '1', 'c81e728d9d4c2f636f067f89cc14862c', 'll', '', '', '', '', '', null, '2018-06-14 15:36:24', '2018-06-14 15:36:24');

-- ----------------------------
-- Table structure for user_consumption
-- ----------------------------
DROP TABLE IF EXISTS `user_consumption`;
CREATE TABLE `user_consumption` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `user_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '用户ID',
  `pay_type` tinyint(3) unsigned NOT NULL DEFAULT 0 COMMENT '购买的虚拟商品类别 如购买帖子置顶之类的',
  `integral` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '代币',
  `create_time` datetime NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='007-用户消费记录 by kill8268';

-- ----------------------------
-- Records of user_consumption
-- ----------------------------

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `user_id` int(11) unsigned NOT NULL DEFAULT 0,
  `integral` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '积分？代币？',
  `company_name` varchar(30) NOT NULL DEFAULT '' COMMENT '公司名称',
  `business_license_no` varchar(30) NOT NULL DEFAULT '' COMMENT '营业执照号',
  `company_approve_flag` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `create_time` datetime NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `USER_USER_ID_index` (`id`),
  KEY `USER_USER_NAME_index` (`integral`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='002-用户详细信息表 by kill_8268';

-- ----------------------------
-- Records of user_info
-- ----------------------------

-- ----------------------------
-- Table structure for user_notice
-- ----------------------------
DROP TABLE IF EXISTS `user_notice`;
CREATE TABLE `user_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `user_id` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '被推送用户ID 由逗号分隔 -1:为所有用户',
  `push_user_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '推送用户ID 0:系统推送',
  `notice_title` varchar(50) NOT NULL DEFAULT '' COMMENT '通知标题',
  `notice_content` varchar(200) NOT NULL DEFAULT '' COMMENT '内容',
  `create_time` datetime DEFAULT current_timestamp(),
  `update_time` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='008-用户通知表 by kill8268';

-- ----------------------------
-- Records of user_notice
-- ----------------------------

-- ----------------------------
-- Table structure for user_recharge
-- ----------------------------
DROP TABLE IF EXISTS `user_recharge`;
CREATE TABLE `user_recharge` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `order_id` varchar(20) NOT NULL DEFAULT '' COMMENT '交易ID',
  `user_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '用户ID',
  `amount` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '充值金额',
  `recharge_type` tinyint(3) unsigned NOT NULL DEFAULT 0 COMMENT '充值类型',
  `create_time` datetime DEFAULT current_timestamp(),
  `update_time` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `USER_RECHARGE_ID_index` (`id`),
  KEY `USER_RECHARGE_USER_ID_index` (`user_id`),
  KEY `USER_RECHARGE_ORDER_ID_index` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='003-用户充值记录 by kill8268';

-- ----------------------------
-- Records of user_recharge
-- ----------------------------

-- ----------------------------
-- Table structure for user_resume
-- ----------------------------
DROP TABLE IF EXISTS `user_resume`;
CREATE TABLE `user_resume` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `sex` varchar(255) DEFAULT NULL COMMENT '性别',
  `phone` varchar(255) DEFAULT NULL COMMENT '电话',
  `e_mail` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `adress` varchar(255) DEFAULT NULL COMMENT '地址',
  `birthday` varchar(255) DEFAULT NULL COMMENT '教育经历',
  `user_id` int(11) DEFAULT NULL,
  `personal` varchar(255) DEFAULT '' COMMENT '个人评价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_resume
-- ----------------------------
INSERT INTO `user_resume` VALUES ('17', '1', '女', '1', '1', 'a', '2018-06-03', '1', '');
INSERT INTO `user_resume` VALUES ('18', '1', '女', '1', '1', 'a', '2018-06-03', '1', '');
INSERT INTO `user_resume` VALUES ('19', '1', '女', '1', '1', 'a', '2018-06-03', '1', '');
INSERT INTO `user_resume` VALUES ('20', '1', '女', '1', '1', 'a', '2018-06-12', '1', '');
INSERT INTO `user_resume` VALUES ('21', '1', '男', '1', '1', 'a', '2018-06-06', '1', '');
INSERT INTO `user_resume` VALUES ('22', '1', '女', '1', '11', 'a', '2018-06-20', '1', '');
INSERT INTO `user_resume` VALUES ('23', '1', '女', '1', '11', 'a', '2018-06-20', '1', '');
INSERT INTO `user_resume` VALUES ('24', '1', '女', '1', '11', 'a', '2018-06-20', '1', '');
INSERT INTO `user_resume` VALUES ('25', '1', '女', '1', '11', 'a', '2018-06-20', '1', '');
INSERT INTO `user_resume` VALUES ('26', '1', '女', '1', '11', 'a', '2018-06-20', '1', '');
INSERT INTO `user_resume` VALUES ('27', '1', '女', '1', '11', 'a', '2018-06-20', '1', '');
INSERT INTO `user_resume` VALUES ('28', '1', '女', '1', '11', 'a', '2018-06-20', '1', '');
INSERT INTO `user_resume` VALUES ('29', '1', '女', '1', '2', 'a', '2018-06-28', '1', '');
INSERT INTO `user_resume` VALUES ('30', '1', '女', '1', '2', 'a', '2018-06-23', '1', '312313');

-- ----------------------------
-- Table structure for work_experience
-- ----------------------------
DROP TABLE IF EXISTS `work_experience`;
CREATE TABLE `work_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) DEFAULT NULL COMMENT '公司名称',
  `station` varchar(255) DEFAULT NULL COMMENT '岗位名称',
  `hiredate` varchar(255) DEFAULT NULL COMMENT '入职时间',
  `leavedate` varchar(255) DEFAULT NULL COMMENT '离职时间',
  `income` varchar(255) DEFAULT NULL COMMENT '税前收入',
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of work_experience
-- ----------------------------
