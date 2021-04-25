-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 25, 2021 at 06:43 PM
-- Server version: 10.3.28-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sunseton_351Project`
--
CREATE DATABASE IF NOT EXISTS `sunseton_351Project` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sunseton_351Project`;

-- --------------------------------------------------------

--
-- Table structure for table `QuizQuestions`
--

CREATE TABLE `QuizQuestions` (
  `Id` int(11) NOT NULL COMMENT 'Stores the question number',
  `Question` text NOT NULL COMMENT 'Store the question itself'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='This one will relate to Quiz-Answers';

--
-- Dumping data for table `QuizQuestions`
--

INSERT INTO `QuizQuestions` (`Id`, `Question`) VALUES
(18, '\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" -Nelson Mandela'),
(19, '\"If life were predictable it would cease to be life, and be without flavor.\" -Eleanor Roosevelt'),
(16, '\"Life is what happens when youre busy making other plans.\" -John Lennon'),
(24, '\"Critique makes this industry better. But its under attack.\" -  TotalBiscuit'),
(20, '\"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.\" -Steve Jobs'),
(26, '\"Logic is the beginning of wisdom, not the end\" -Spock');

-- --------------------------------------------------------

--
-- Table structure for table `Testing`
--

CREATE TABLE `Testing` (
  `asd` int(11) NOT NULL,
  `asdasd` int(11) NOT NULL,
  `asdasdasd` int(11) NOT NULL,
  `asdasdase` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `QuizQuestions`
--
ALTER TABLE `QuizQuestions`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `QuizQuestions`
--
ALTER TABLE `QuizQuestions`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Stores the question number', AUTO_INCREMENT=27;
--
-- Database: `sunseton_Comp351Lab5`
--
CREATE DATABASE IF NOT EXISTS `sunseton_Comp351Lab5` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sunseton_Comp351Lab5`;

-- --------------------------------------------------------

--
-- Table structure for table `QuizAnswers`
--

CREATE TABLE `QuizAnswers` (
  `AnswerID` int(11) NOT NULL,
  `Quiz` int(11) NOT NULL,
  `Position` int(11) NOT NULL,
  `Correct` tinyint(1) NOT NULL,
  `Question` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `QuizAnswers`
--

INSERT INTO `QuizAnswers` (`AnswerID`, `Quiz`, `Position`, `Correct`, `Question`) VALUES
(1, 1, 1, 0, 'Brown'),
(2, 1, 2, 1, 'Blue'),
(3, 2, 1, 1, 'Brown');

-- --------------------------------------------------------

--
-- Table structure for table `QuizQuestions`
--

CREATE TABLE `QuizQuestions` (
  `Id` int(11) NOT NULL COMMENT 'Stores the question number',
  `Question` text NOT NULL COMMENT 'Store the question itself'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='This one will relate to Quiz-Answers';

--
-- Dumping data for table `QuizQuestions`
--

INSERT INTO `QuizQuestions` (`Id`, `Question`) VALUES
(1, 'What colour is the sky?'),
(2, 'Why colour is the earth?'),
(3, 'Is Up down?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `QuizAnswers`
--
ALTER TABLE `QuizAnswers`
  ADD PRIMARY KEY (`AnswerID`);

--
-- Indexes for table `QuizQuestions`
--
ALTER TABLE `QuizQuestions`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `QuizAnswers`
--
ALTER TABLE `QuizAnswers`
  MODIFY `AnswerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `QuizQuestions`
--
ALTER TABLE `QuizQuestions`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Stores the question number', AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
