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
INSERT INTO position (position_name) VALUES ('Tr?????ng b??? m??n');
INSERT INTO position (position_name) VALUES ('Gi???ng vi??n');
INSERT INTO position (position_name) VALUES ('Sinh vi??n');

INSERT INTO information (info_user, info_position, info_email, info_name, info_phone, info_dob, info_img) VALUES ('vuongne', 2, 'vuongne@gmail.com', 'V????ng Qu??ch', '0939436617', '2000-07-21', 'avatar-default');
INSERT INTO information (info_user, info_position, info_email, info_name, info_phone, info_dob, info_img) VALUES ('vuongne217', 4, 'vuongday@gmail.com', 'K??? V????ng', '0939436617', '2000-07-21', 'avatar-default');
INSERT INTO information (info_user, info_position, info_email, info_name, info_phone, info_dob, info_img) VALUES ('vuongne2107', 4, 'vinny@gmail.com', 'Vinny Quach', '0939436618', '2000-07-21', 'avatar-default');
INSERT INTO information (info_user, info_position, info_email, info_name, info_phone, info_dob, info_img) VALUES ('ADMIN', 1, 'horizone217@gmail.com', 'Admin', '0939436618', '2000-07-21', 'avatar-default');

INSERT INTO category (category_name) VALUES ('None');
INSERT INTO category (category_name) VALUES ('H???c thu???t');
INSERT INTO category (category_name) VALUES ('Ngo??i tr???i');
INSERT INTO category (category_name) VALUES ('Th??? thao');

INSERT INTO `member` (member_name) VALUES ('None');
INSERT INTO `member` (member_name) VALUES ('C?? Th??');
INSERT INTO `member` (member_name) VALUES ('Sinh vi??n l???p DI18V7F2');
INSERT INTO `member` (member_name) VALUES ('Sinh vi??n l???p DI18V7F1');
INSERT INTO `member` (member_name) VALUES ('B??? m??n CNTT');
INSERT INTO `member` (member_name) VALUES ('B??? m??n MMT');
INSERT INTO `member` (member_name) VALUES ('B??? m??n CNPM');

INSERT INTO guest (guest_name) VALUES ('None');
INSERT INTO guest (guest_name) VALUES ('C??ng ty FPT');
INSERT INTO guest (guest_name) VALUES ('Khoa kinh t???');
INSERT INTO guest (guest_name) VALUES ('Khoa m??i tr?????ng');
INSERT INTO guest (guest_name) VALUES ('Khoa ch??nh tr???');
INSERT INTO guest (guest_name) VALUES ('Khoa ngo???i ng???');

INSERT INTO cooperative (cooperative_name) VALUES ('None');
INSERT INTO cooperative (cooperative_name, cooperative_des) VALUES ('DELL','M???t c??ng ty c??ng ngh??? uy t??n');
INSERT INTO cooperative (cooperative_name, cooperative_des) VALUES ('Asus','M???t c??ng ty c??ng ngh??? h??ng ?????u');
INSERT INTO cooperative (cooperative_name, cooperative_des) VALUES ('Acer','M???t c??ng ty c??ng ngh??? uy t??n');
INSERT INTO cooperative (cooperative_name, cooperative_des) VALUES ('HP','M???t c??ng ty c??ng ngh??? h??ng ?????u');

INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Vua d???i boom', 4, 2, 1, '2021-12-21');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Vua ph?? l?????i', 4, 3, 1, '2021-09-11');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Vua ??p r???', 4, 4, 1, '2022-01-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'Giao l??u c??ng ngh??? NFT', 2, 2, 1, '2022-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne217', 'T??m hi???u v??? ph???n m???m', 2, 3, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Chi???n binh xanh', 3, 4, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'M??a h?? xanh', 3, 2, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'C???m tr???i', 3, 3, 1, '2022-01-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', '???ng h??? l?? l???t', 3, 4, 1, '2022-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Chung tay v?? c???ng ?????ng', 3, 2, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', '??ua xe m??? r???ng', 3, 4, 1, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'T??m hi???u v??? robot', 2, 2, 0, '2021-09-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'T??m hi???u v??? block-chain', 2, 4, 0, '2022-01-20');
INSERT INTO `event` (event_creator, event_name, event_cate, event_coop, event_status, event_date) VALUES ('vuongne2107', 'Tr??? v??? hoang d??', 3, 5, 0, '2021-09-20');

INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (1, 'Cu???c thi b??ng chuy???n h???ng n??m d??nh cho c??c sinh vi??n thu???c khoa CNTT & TT', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 4, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (2, 'Cu???c thi b??ng ???? h???ng n??m d??nh cho c??c sinh vi??n thu???c khoa CNTT & TT', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 3, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (3, 'Cu???c thi b??ng r??? h???ng n??m d??nh cho c??c sinh vi??n thu???c khoa CNTT & TT', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 5, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (4, 'Ng??y t??m hi???u v??? m???t c??ng ngh??? m???i, gi??p sinh vi??n hi???u chuy??n s??u v??? ng??nh', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 3, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (5, 'Gi??p sinh vi??n t??m hi???u s??u v??? ph???n m???m', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 4, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (6, 'Sinh vi??n tham gia t??nh nguy???n v?? c???ng ?????ng ph??ng ch???ng covid, ?????y l??i ?????i d???ch', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 5, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (7, 'Sinh vi??n tham gia t??nh nguy???n v?? c???ng ?????ng tr???ng c??y trong th??nh ph???, t???o m??i v??m xanh', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 3, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (8, 'T??? ch???c ????m c???m tr???i, gi??p c??c sinh vi??n t??? ch???c c??c ho???t ?????ng vui ch??i gi???i tr??', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 4, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (9, 'K??u g???i m???i ng?????i ???ng h??? l?? l???t, gi??p ?????t n?????c v???c d???y sau c??n thi??n tai, chung tay g??p s???c v?? ?????t n?????c', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 5, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (10, 'M???t chu???i ho???t ?????ng bao g???m: d???n r??c, tr???ng c??y, gi??p ????? m???i ng?????i', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 3, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (11, 'Anh em 66 m??i ?????nh', 'van-gogh.jpg', 'D??n ch??i v??? ????m', 4, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (12, 'Ch????ng tr??nh h???c thu???t d??nh cho c??c sinh vi??n y??u th??ch m?? mu???n t??m hi???u v??? robot', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 2, 5);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (13, 'Ch????ng tr??nh h???c thu???t d??nh cho c??c sinh vi??n y??u th??ch m?? mu???n t??m hi???u v??? block-chain', 'van-gogh.jpg', 'Sinh vi??n tr?????ng DH C???n Th??', 2, 3);
INSERT INTO content (content_event_id, content_des, content_img, content_audience, content_guest, content_member) VALUES (14, 'M???t h??nh tr??nh kh??m ph?? thi??n nhi??n ??? V??ng L??i c???a r???ng C??t B?? ', 'van-gogh.jpg', 'Sinh vi??n ??am m?? cu???c h??nh tr??nh m???o hi???m', 4, 3);

------------------------------------------------------------------------
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
