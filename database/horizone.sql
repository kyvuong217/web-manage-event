-- create database horizone;
-- drop database horizone;
-- use horizone;


CREATE TABLE `account` (
	account_name varchar(50) primary key,
	account_passwd varchar(50),
	account_role varchar(10)
);

CREATE TABLE position (
	position_id int primary key AUTO_INCREMENT,
	position_name varchar(50)
);

CREATE TABLE information (
	info_id int primary key AUTO_INCREMENT,
	info_user varchar(50),
	info_name varchar(50),
    info_email varchar(50),
	info_position int,
	info_phone char(10),
	info_dob date,
	info_img varchar(50) 
);

CREATE TABLE category (
	category_id int primary key AUTO_INCREMENT,
	category_name varchar(50) 
);

CREATE TABLE `member` (
	member_id int primary key AUTO_INCREMENT,
	member_name varchar(50) 
);

CREATE TABLE guest (
	guest_id int primary key AUTO_INCREMENT,
	guest_name varchar(50)
);

-- Partner Institution
CREATE TABLE cooperative (
	cooperative_id int primary key AUTO_INCREMENT,
    cooperative_name varchar(50),
    cooperative_des varchar(255)
);

CREATE TABLE `event` (
	event_id int primary key AUTO_INCREMENT,
	event_creator varchar(50),
	event_name varchar(50),
    event_coop int,
	event_cate int,
    event_status boolean,
	event_date date 
);

CREATE TABLE content (
	content_id int primary key AUTO_INCREMENT,
	content_event_id int,
	content_des varchar(255),
    content_img varchar(255),
	content_audience varchar(255),
	content_guest int,
	content_member int
);
----------------------------------------------------------------------------
ALTER TABLE content
  ADD CONSTRAINT content_ibfk_1 FOREIGN KEY (content_event_id) REFERENCES `event` (event_id),
  ADD CONSTRAINT content_ibfk_2 FOREIGN KEY (content_guest) REFERENCES guest (guest_id),
  ADD CONSTRAINT content_ibfk_3 FOREIGN KEY (content_member) REFERENCES member (member_id);

ALTER TABLE `event`
  ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (event_creator) REFERENCES `account` (account_name),
  ADD CONSTRAINT `event_ibfk_2` FOREIGN KEY (event_cate) REFERENCES category (category_id),
  ADD CONSTRAINT `event_ibfk_3` FOREIGN KEY (event_coop) REFERENCES cooperative (cooperative_id);

ALTER TABLE information
  ADD CONSTRAINT information_ibfk_1 FOREIGN KEY (info_user) REFERENCES `account` (account_name),
  ADD CONSTRAINT information_ibfk_2 FOREIGN KEY (info_position) REFERENCES position (position_id);
  
  
----------------------------------------------------------------------------
INSERT INTO `account` (account_name, account_passwd, account_role) VALUES ('vuongne', 'vuongne', 'admin');
INSERT INTO `account` (account_name, account_passwd, account_role) VALUES ('vuongne217', 'vuongne217', 'user');
INSERT INTO `account` (account_name, account_passwd, account_role) VALUES ('vuongne2107', 'vuongne2017', 'user');
INSERT INTO `account` (account_name, account_passwd, account_role) VALUES ('ADMIN', 'admin', 'admin');

INSERT INTO position (position_name) VALUES ('None');
INSERT INTO position (position_name) VALUES ('Trưởng bộ môn');
INSERT INTO position (position_name) VALUES ('Giảng viên');
INSERT INTO position (position_name) VALUES ('Sinh viên');

INSERT INTO information (info_user, info_position, info_email, info_name, info_phone, info_dob, info_img) VALUES ('vuongne', 2, 'vuongne@gmail.com', 'Vương Quách', '0939436617', '2000-07-21', 'avatar-default');
INSERT INTO information (info_user, info_position, info_email, info_name, info_phone, info_dob, info_img) VALUES ('vuongne217', 4, 'vuongday@gmail.com', 'Kỳ Vương', '0939436617', '2000-07-21', 'avatar-default');
INSERT INTO information (info_user, info_position, info_email, info_name, info_phone, info_dob, info_img) VALUES ('vuongne2107', 4, 'vinny@gmail.com', 'Vinny Quach', '0939436618', '2000-07-21', 'avatar-default');
INSERT INTO information (info_user, info_position, info_email, info_name, info_phone, info_dob, info_img) VALUES ('ADMIN', 1, 'horizone217@gmail.com', 'Admin', '0939436618', '2000-07-21', 'avatar-default');

INSERT INTO category (category_name) VALUES ('None');
INSERT INTO category (category_name) VALUES ('Học thuật');
INSERT INTO category (category_name) VALUES ('Ngoài trời');
INSERT INTO category (category_name) VALUES ('Thể thao');

INSERT INTO `member` (member_name) VALUES ('None');
INSERT INTO `member` (member_name) VALUES ('Cô Thư');
INSERT INTO `member` (member_name) VALUES ('Sinh viên lớp DI18V7F2');
INSERT INTO `member` (member_name) VALUES ('Sinh viên lớp DI18V7F1');
INSERT INTO `member` (member_name) VALUES ('Bộ môn CNTT');
INSERT INTO `member` (member_name) VALUES ('Bộ môn MMT');
INSERT INTO `member` (member_name) VALUES ('Bộ môn CNPM');

INSERT INTO guest (guest_name) VALUES ('None');
INSERT INTO guest (guest_name) VALUES ('Công ty FPT');
INSERT INTO guest (guest_name) VALUES ('Khoa kinh tế');
INSERT INTO guest (guest_name) VALUES ('Khoa môi trường');
INSERT INTO guest (guest_name) VALUES ('Khoa chính trị');
INSERT INTO guest (guest_name) VALUES ('Khoa ngoại ngữ');

INSERT INTO cooperative (cooperative_name) VALUES ('None');
INSERT INTO cooperative (cooperative_name, cooperative_des) VALUES ('DELL','Một công ty công nghệ uy tín');
INSERT INTO cooperative (cooperative_name, cooperative_des) VALUES ('Asus','Một công ty công nghệ hàng đầu');
INSERT INTO cooperative (cooperative_name, cooperative_des) VALUES ('Acer','Một công ty công nghệ uy tín');
INSERT INTO cooperative (cooperative_name, cooperative_des) VALUES ('HP','Một công ty công nghệ hàng đầu');

INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Vua dội boom', 4, 2, 1, '2021-12-21');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Vua phá lưới', 4, 3, 1, '2021-09-11');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Vua úp rổ', 4, 4, 1, '2022-01-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Giao lưu công nghệ NFT', 2, 2, 1, '2022-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Tìm hiểu về phần mềm', 2, 3, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Chiến binh xanh', 3, 4, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Mùa hè xanh', 3, 2, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Cắm trại', 3, 3, 1, '2022-01-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Ủng hộ lũ lụt', 3, 4, 1, '2022-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Chung tay vì cộng đồng', 3, 2, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Đua xe mở rộng', 3, 4, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Tìm hiểu về robot', 2, 2, 0, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Tìm hiểu về block-chain', 2, 4, 0, '2022-01-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Trở về hoang dã', 3, 5, 0, '2021-09-20');

INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (1, 'Cuộc thi bóng chuyền hằng năm dành cho các sinh viên thuộc khoa CNTT & TT', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 4, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (2, 'Cuộc thi bóng đá hằng năm dành cho các sinh viên thuộc khoa CNTT & TT', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 3, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (3, 'Cuộc thi bóng rổ hằng năm dành cho các sinh viên thuộc khoa CNTT & TT', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 5, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (4, 'Ngày tìm hiểu về một công nghệ mới, giúp sinh viên hiểu chuyên sâu về ngành', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 3, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (5, 'Giúp sinh viên tìm hiểu sâu về phần mềm', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 4, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (6, 'Sinh viên tham gia tình nguyện vì cộng đồng phòng chống covid, đẩy lùi đại dịch', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 5, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (7, 'Sinh viên tham gia tình nguyện vì cộng đồng trồng cây trong thành phố, tạo mái vòm xanh', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 3, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (8, 'Tổ chức đêm cắm trại, giúp các sinh viên tổ chức các hoạt động vui chơi giải trí', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 4, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (9, 'Kêu gọi mọi người ủng hộ lũ lụt, giúp đất nước vực dậy sau cơn thiên tai, chung tay góp sức vì đất nước', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 5, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (10, 'Một chuỗi hoạt động bao gồm: dọn rác, trồng cây, giúp đỡ mọi người', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 3, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (11, 'Anh em 66 mãi đỉnh', 'van-gogh.jpg', 'Dân chơi về đêm', 4, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (12, 'Chương trình học thuật dành cho các sinh viên yêu thích mà muốn tìm hiểu về robot', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 2, 5);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (13, 'Chương trình học thuật dành cho các sinh viên yêu thích mà muốn tìm hiểu về block-chain', 'van-gogh.jpg', 'Sinh viên trường DH Cần Thơ', 2, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (14, 'Một hành trình khám phá thiên nhiên ở Vùng Lõi của rừng Cát Bà ', 'van-gogh.jpg', 'Sinh viên đam mê cuộc hành trình mạo hiểm', 4, 3);

------------------------------------------------------------------------
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
