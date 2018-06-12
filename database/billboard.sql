-- --------------------------------------------------------
-- 主机:                           192.168.0.107
-- 服务器版本:                        10.2.14-MariaDB - MariaDB Server
-- 服务器操作系统:                      Linux
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 billboard 的数据库结构
CREATE DATABASE IF NOT EXISTS `billboard` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `billboard`;

-- 导出  表 billboard.favorite 结构
CREATE TABLE IF NOT EXISTS `favorite` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item` char(36) NOT NULL DEFAULT '',
  `user` char(36) NOT NULL DEFAULT '',
  `type` varchar(10) NOT NULL DEFAULT '' COMMENT '招聘，求职',
  `create_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `item_id` (`item`),
  KEY `user_id` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='收藏';

-- 数据导出被取消选择。
-- 导出  表 billboard.img 结构
CREATE TABLE IF NOT EXISTS `img` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `img_url` varchar(256) DEFAULT 'NULL' COMMENT '图片地址',
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  `create_time` datetime DEFAULT current_timestamp(),
  `update_time` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `IMG_ID_index` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='009-图片表 by kill8368';

-- 数据导出被取消选择。
-- 导出  表 billboard.job 结构
CREATE TABLE IF NOT EXISTS `job` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。
-- 导出  表 billboard.platform_news 结构
CREATE TABLE IF NOT EXISTS `platform_news` (
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

-- 数据导出被取消选择。
-- 导出  表 billboard.platform_news_comment 结构
CREATE TABLE IF NOT EXISTS `platform_news_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_id` int(11) NOT NULL DEFAULT 0 COMMENT '消息ID',
  `user_id` int(11) NOT NULL DEFAULT 0 COMMENT '评论用户ID',
  `content` text DEFAULT NULL COMMENT '评论内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='006-消息回复 by kill8268';

-- 数据导出被取消选择。
-- 导出  表 billboard.platform_news_img 结构
CREATE TABLE IF NOT EXISTS `platform_news_img` (
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

-- 数据导出被取消选择。
-- 导出  表 billboard.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `uuid` char(36) NOT NULL DEFAULT '',
  `account` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名称(nickName)',
  `password` char(32) NOT NULL DEFAULT '',
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='001-用户基本系信息表 by kill_8268';

-- 数据导出被取消选择。
-- 导出  表 billboard.user_consumption 结构
CREATE TABLE IF NOT EXISTS `user_consumption` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `user_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '用户ID',
  `pay_type` tinyint(3) unsigned NOT NULL DEFAULT 0 COMMENT '购买的虚拟商品类别 如购买帖子置顶之类的',
  `integral` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '代币',
  `create_time` datetime NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='007-用户消费记录 by kill8268';

-- 数据导出被取消选择。
-- 导出  表 billboard.user_info 结构
CREATE TABLE IF NOT EXISTS `user_info` (
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

-- 数据导出被取消选择。
-- 导出  表 billboard.user_notice 结构
CREATE TABLE IF NOT EXISTS `user_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `user_id` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '被推送用户ID 由逗号分隔 -1:为所有用户',
  `push_user_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '推送用户ID 0:系统推送',
  `notice_title` varchar(50) NOT NULL DEFAULT '' COMMENT '通知标题',
  `notice_content` varchar(200) NOT NULL DEFAULT '' COMMENT '内容',
  `create_time` datetime DEFAULT current_timestamp(),
  `update_time` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='008-用户通知表 by kill8268';

-- 数据导出被取消选择。
-- 导出  表 billboard.user_recharge 结构
CREATE TABLE IF NOT EXISTS `user_recharge` (
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

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
