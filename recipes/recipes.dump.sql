-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2022 at 06:10 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipes`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `private_view` tinyint(1) DEFAULT 0,
  `title` varchar(255) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `body` text NOT NULL,
  `ingredients` varchar(500) DEFAULT NULL,
  `prep_time` varchar(20) DEFAULT NULL,
  `cook_time` varchar(20) DEFAULT NULL,
  `servings` int(11) DEFAULT NULL,
  `directions` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT 0,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `user_id`, `private_view`, `title`, `slug`, `body`, `ingredients`, `prep_time`, `cook_time`, `servings`, `directions`, `image`, `published`, `created`, `modified`) VALUES
(1, 1, 0, 'Bacon and Eggs', 'bacon-and-eggs', 'Get some yummy bacon and eggs and coffee.  Great for breakfast', 'Bacon and Eggs', '5 min', '15 min', 2, 'Make enough for the person you\'re with and youreself', 'https://static.toiimg.com/thumb/75681091.cms?width=573&height=430', 0, '2022-03-03 15:29:05', '2022-03-07 14:33:07'),
(2, 1, 0, 'Tacos', 'tacos', 'Chrizo tacos and yummines', 'chrizo,tacoShells,blah, blah and blah', '20 min', '20 min', 4, 'Make enough for 4 people!', 'https://www.thespruceeats.com/thmb/GM1MSZqo_5oUGhF_p-OYuXz2cxI=/3799x2533/filters:no_upscale()/basic-tacos-recipe-with-ground-beef-and-beans-3054098-hero1-42c17bf93d3a4c58a8b967872dda45ba.jpg', 1, '2022-03-03 15:33:22', '2022-03-18 20:08:33'),
(3, 1, 0, 'Mac n cheese', 'Mac-n-cheese', 'test need more', '', '', '', NULL, '', '', 0, '2022-03-04 18:36:59', '2022-03-18 20:31:27'),
(4, 1, 0, 'bbq chicken pizza', 'bbq-chicken-pizza', 'bbq chicken pizza delciousiness.', '', '', '', NULL, '', '', 0, '2022-03-04 18:40:54', '2022-03-08 21:36:13'),
(8, 1, 1, 'Mango Milkshakes', 'mango-milkshakes', 'Yummy delicious stuff', 'Mangos and icecream', '20', '40', 2, 'testing', '', 0, '2022-03-07 14:34:37', '2022-03-07 14:34:37'),
(9, 2, 0, 'Testing Tags', 'testing-tags', 'Testing Tags', 'testing tags', '100', '60', 10, 'abcd....', '', 0, '2022-03-07 19:29:09', '2022-03-09 17:09:13'),
(10, 1, 0, 'test', 'test', 'test', 'hearts,stars,horeshoes', '20', '30', 34, 'no', '', 0, '2022-03-09 16:49:14', '2022-03-09 16:49:14'),
(12, 1, 0, 'The bomb', 'The-bomb', 'Delicous stuff', NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-03-18 20:12:17', '2022-03-18 20:12:17'),
(20, 9, 0, 'testing', 'testing', 'testing and testing', NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-03-28 18:33:07', '2022-03-28 18:33:07'),
(21, 9, 0, 'testtttt', 'testtttt', 'testing again', NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-03-28 18:39:03', '2022-03-28 18:39:03'),
(22, 9, 0, 'Chorizo TAcos', 'Chorizo-TAcos', 'Please work', NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-03-28 18:43:32', '2022-03-28 18:43:32'),
(23, 9, 0, 'Stan\'s food is dope', 'Stan-s-food-is-dope', 'testing shit', NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-03-28 18:46:54', '2022-03-28 18:46:54'),
(24, 9, 0, 'Stan\'s 2nd attempt', 'Stan-s-2nd-attempt', 'testing all over again', NULL, '30', NULL, NULL, NULL, NULL, 0, '2022-03-28 18:50:10', '2022-03-28 18:50:10'),
(25, 9, 0, 'Horrendous Biscuts', 'Horrendous-Biscuts', 'These biscuits are so delcious', 'flour,eggs,buttermilk', '60', '20', 10, 'Mix it all together in a bowl and divide, then bake', 'https://mario.wiki.gallery/images/3/3e/MPSS_Mario.png', 0, '2022-03-28 18:55:22', '2022-03-28 19:07:06'),
(26, 12, 0, 'testing all over', 'testing-all-over', 'blah bla blahdddddddddddddd', 'so inspired man', '30', '30', 10, 'whoops', 'https://memberclicks.com/wp-content/uploads/2021/12/Explaining-a-Whoops-to-Your-Members-2.jpg', 0, '2022-04-01 18:15:19', '2022-04-01 18:15:19'),
(27, 8, 0, 'testest', 'testest', 'asdfsadfsdf', '30', '300', '30', 30, 'testing', 'test.PNG', 0, '2022-04-25 18:54:35', '2022-05-04 16:49:29'),
(28, 8, 0, 'MegaManX', 'MegaManX', 'sadlkfjsalkdjflksjdf', 'sadfsadfsdf', '30', '30', 30, 'asdfsadfsdf', 'megaman.jpg', 0, '2022-04-25 18:58:20', '2022-04-25 18:58:20'),
(30, 8, 0, 'testestoasdfaskdjf', 'testestoasdfaskdjf', 'etestrserasdfasdfasdfsadfasdfsdaf', '545456564', '30', '30', 10, '5456456564', 'webroottest.PNG', 0, '2022-04-25 19:21:02', '2022-04-25 19:21:02'),
(31, 8, 0, 'Willies Amazing Chilli', 'Willies-Amazing-Chilli', 'TEsting the summary \r\n\r\nLorem isupm. blah blah blah  has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nShooot gonna make this a third paragraph and see if we can test from it', 'tastey,yummy,goodness,bananas,forever,popunk,pizza', '30', '40', 20, 'My good ness this is supposed to be really goood.  Need to make this a text area and see if we can seperate the blocks of texts into steps that the user puts in.', 'shreddar.jfif', 0, '2022-05-05 23:32:14', '2022-05-05 23:32:14'),
(33, 8, 0, 'Testing Direction fix', 'Testing-Direction-fix', 'today is the day we are ', 'squidward,spongebob,patrick', '30', '40', 20, 'Peel the tomatoes\r\nDo this with caution\r\nPleasee', 'squidward.jpg', 0, '2022-05-06 14:53:19', '2022-05-06 14:53:19'),
(35, 8, 0, 'Squidward', 'Squidward', 'test\r\ntest\r\nset', 'bananas,berries', '20', '30', 10, 'Peel the berries\r\nPeel the bananas\r\nTry again', 'squidward.jpg', 0, '2022-05-06 14:54:47', '2022-05-06 14:54:47'),
(36, 8, 0, 'Choclate Chip Cookies', 'Choclate-Chip-Cookies', 'These are going to make your mouth water.... just kidding. \r\n\r\nThis is a test post to see how everything looks.  \r\n\r\nWe should have three different segments to this descirption.\r\n\r\nDoes this work?', 'chocloate chips, brown sugar, eggs, sugar, molasses, flour, butter, 1 tsp vanilla, IPA', '30', '40', 2, 'Go to the store and get everything\r\n\r\nGo back and get what you missed\r\n\r\nMix all your dry ingredients in large bowl\r\n\r\nMix the wet ingredients in a small bowl\r\n\r\nCombine wet ingredients into the dry ingredients bowl\r\n\r\nMix til dough mixture is formed.\r\n\r\nEither use a spoon or a cookie dough scooper\r\n\r\nPlace onto sheet with oven brought to 350 F\r\n\r\nBake for 12-15 minutes\r\n\r\n\r\n', 'cookies.jpg', 0, '2022-05-06 18:39:20', '2022-05-11 17:18:25'),
(37, 8, 0, 'Wings and Fries', 'Wings-and-Fries', 'Crazy goodness from the south.\r\n\r\nMake sure to breathe and stretch after eating\r\n\r\n', 'Whatever,the,resturant,decides,to,use', '10', '0', 2, 'Walk to restrauant\r\nGet a Drink\r\nSit around and wait for the food\r\nYummmmm', 'yummyFood.jpg', 0, '2022-05-12 13:52:06', '2022-05-12 13:52:06');

-- --------------------------------------------------------

--
-- Table structure for table `recipes_tags`
--

CREATE TABLE `recipes_tags` (
  `recipe_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipes_tags`
--

INSERT INTO `recipes_tags` (`recipe_id`, `tag_id`) VALUES
(1, 2),
(1, 3),
(1, 8),
(1, 19),
(2, 1),
(2, 3),
(2, 19),
(3, 19),
(8, 2),
(20, 3),
(20, 9),
(20, 10),
(21, 3),
(21, 11),
(22, 12),
(23, 13),
(24, 3),
(24, 14),
(25, 15),
(25, 16),
(26, 17),
(26, 18),
(27, 3),
(28, 3),
(30, 20),
(31, 16),
(31, 21),
(31, 22),
(33, 25),
(35, 26),
(36, 23),
(36, 27),
(36, 28),
(37, 29),
(37, 30),
(37, 31),
(37, 32),
(37, 33);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `title`, `created`, `modified`) VALUES
(1, 'Spicy', '2022-03-18 20:18:16', '2022-04-08 19:11:52'),
(2, 'breakfast', '2022-03-18 20:18:25', '2022-03-18 20:18:25'),
(3, 'testing2', '2022-03-18 20:21:54', '2022-05-12 19:05:05'),
(4, 'testing', '2022-03-25 18:13:42', '2022-03-25 18:13:42'),
(5, 'tidepods', '2022-03-25 18:51:41', '2022-03-25 18:51:41'),
(6, 'yummybears', '2022-03-25 18:51:41', '2022-03-25 18:51:41'),
(7, 'wohoo', '2022-03-25 19:45:24', '2022-03-25 19:45:24'),
(8, 'let\'sgoood', '2022-03-25 19:45:24', '2022-04-08 18:57:08'),
(9, 'my', '2022-03-28 18:33:07', '2022-03-28 18:33:07'),
(10, 'app', '2022-03-28 18:33:07', '2022-03-28 18:33:07'),
(11, '123', '2022-03-28 18:39:03', '2022-03-28 18:39:03'),
(12, 'doritos', '2022-03-28 18:43:32', '2022-03-28 18:43:32'),
(13, 'microwaveable', '2022-03-28 18:46:54', '2022-03-28 18:46:54'),
(14, 'again', '2022-03-28 18:50:10', '2022-03-28 18:50:10'),
(15, 'biscuits', '2022-03-28 18:55:22', '2022-03-28 18:55:22'),
(16, 'yum', '2022-03-28 18:55:22', '2022-03-28 18:55:22'),
(17, 'testsetset', '2022-04-01 18:15:19', '2022-04-01 18:15:19'),
(18, 'asdfsadf', '2022-04-01 18:15:19', '2022-04-01 18:15:19'),
(19, 'yumm', '2022-04-22 18:29:37', '2022-04-22 18:29:37'),
(20, 'Sharp Cheddar', '2022-04-25 19:21:02', '2022-04-25 19:21:02'),
(21, 'shreddar', '2022-05-05 23:32:14', '2022-05-05 23:32:14'),
(22, 'cool', '2022-05-05 23:32:14', '2022-05-05 23:32:14'),
(23, 'cookies', '2022-05-06 14:02:42', '2022-05-06 14:02:42'),
(24, 'bananas', '2022-05-06 14:02:42', '2022-05-06 14:02:42'),
(25, 'squid', '2022-05-06 14:53:19', '2022-05-06 14:53:19'),
(26, 'squidward', '2022-05-06 14:54:47', '2022-05-06 14:54:47'),
(27, 'xmas', '2022-05-06 18:39:20', '2022-05-06 18:39:20'),
(28, 'chocolate', '2022-05-06 18:39:20', '2022-05-06 18:39:20'),
(29, 'wings', '2022-05-12 13:52:06', '2022-05-12 13:52:06'),
(30, 'onions', '2022-05-12 13:52:06', '2022-05-12 13:52:06'),
(31, 'fries', '2022-05-12 13:52:06', '2022-05-12 13:52:06'),
(32, 'deepfried', '2022-05-12 13:52:06', '2022-05-12 13:52:06'),
(33, 'delicious', '2022-05-12 13:52:06', '2022-05-12 13:52:06'),
(34, 'Burrito', '2022-05-13 15:52:14', '2022-05-13 15:52:14'),
(35, 'Siracha', '2022-05-16 15:47:45', '2022-05-16 15:47:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(35) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text NOT NULL,
  `instagram_link` varchar(255) NOT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `title` varchar(25) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `email`, `password`, `bio`, `instagram_link`, `created`, `modified`, `title`, `image`, `link`) VALUES
(1, 'outofcontrolmike', 'outofcontrolmike@gmail.com', 'success1', 'Just a dude that loves cookin', 'https://www.instagram.com/explodingsnes/', '2022-03-03 13:55:42', '2022-03-08 15:13:37', 'Mr. Mike', 'https://mawportfolio.online/static/media/me.e7cd98b9.png', 'https://www.mawportfolio.online'),
(2, 'machinegunmike', 'test@gmail.com', 'sucess1', 'Got the nickname from cutting pizzas blazing fast', 'https://instagram!', '2022-03-03 13:57:53', '2022-03-09 18:14:06', NULL, NULL, NULL),
(8, 'mike@gmail.com', 'mike@gmail.com', '$2y$10$Uz6Los1BXq1xFUvS0SdbvOlGZxj4pXSsSvsy1eHSdbT8ABrsKpW22', 'Trying this user view stuff out today... this will be the first paragraph.  Should be seperated from the 2nd paragraph.\r\n\r\nI am a chef and that\'s all I want to be.\r\n\r\nGonna try to some stuff later!\r\nTrying this user view stuff out today... this will be the first paragraph.  Should be seperated from the 2nd paragraph.', 'explodingsnes', '2022-03-25 19:44:45', '2022-05-11 16:15:01', 'Silent Protaganist', 'https://mawportfolio.online/static/media/me.e7cd98b9.png', 'mawportfolio.online'),
(9, 'testing', 'testing@gmail.com', '$2y$10$rD3pF0aMdalEa1f3rYsr.eoaxg8lzd9nNWUI0TILRlgI9on6oAHWS', 'Redirect back to user\'s edit... awesome it works', 'testing', '2022-03-28 18:14:28', '2022-04-22 17:58:31', 'Mr. Mike', 'https://mawportfolio.online/static/media/me.e7cd98b9.png', 'https://www.mawportfolio.online'),
(11, 'Ryu Hyabusa', 'ryu@gmail.com', '$2y$10$P19sgtL.dTOpzwJysGcCEu7Po1m82n51CEroF57bOdCHMa26.JIDu', 'ryu from capcom', 'campcom shit', '2022-03-30 12:54:08', '2022-03-30 12:54:08', NULL, NULL, NULL),
(12, 'mygoodnessssssssss', 'mygod@gmail.com', '$2y$10$DnQgQw50Pai/RaeEYT5DFu2o/EzbJnp3ectcjUXyHob86sg1lhPLm', 'test', 'test', '2022-03-30 12:58:52', '2022-04-01 17:52:14', NULL, NULL, NULL),
(13, 'mygoodness', 'mygodd@gmail.com', '$2y$10$7a7.JE6JbCSiObviB4MJbOTI52IIgUKRBgPcYphiaVUd/jxDbN75S', 'test', 'test', '2022-03-30 13:04:57', '2022-03-30 13:04:57', NULL, NULL, NULL),
(14, 'mygoodness', 'mygoddd@gmail.com', '$2y$10$X0.mt7UrGtCoHrluaXsFduOLEeF49J8Wnjt3yBnyNeSP/bg2yyKi.', 'test', 'test', '2022-03-30 13:06:59', '2022-03-30 13:06:59', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `user_key` (`user_id`);

--
-- Indexes for table `recipes_tags`
--
ALTER TABLE `recipes_tags`
  ADD PRIMARY KEY (`recipe_id`,`tag_id`),
  ADD KEY `tag_key` (`tag_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recipes`
--
ALTER TABLE `recipes`
  ADD CONSTRAINT `user_key` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `recipes_tags`
--
ALTER TABLE `recipes_tags`
  ADD CONSTRAINT `recipe_key` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`),
  ADD CONSTRAINT `tag_key` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
