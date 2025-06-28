-- Create and Insert Statements for Stored Procedures

CREATE TABLE SavingsAccounts (
    AccountID NUMBER PRIMARY KEY,
    Balance NUMBER
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Salary NUMBER,
    DepartmentID NUMBER
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    Balance NUMBER
);

INSERT INTO SavingsAccounts VALUES (201, 10000);
INSERT INTO SavingsAccounts VALUES (202, 15000);

INSERT INTO Employees VALUES (1, 'Priya Singh', 50000, 10);
INSERT INTO Employees VALUES (2, 'Vikram Das', 60000, 20);

INSERT INTO Accounts VALUES (301, 8000);
INSERT INTO Accounts VALUES (302, 5000);

-- Exercise 3: Stored Procedures

-- Scenario 1
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
   UPDATE SavingsAccounts
   SET Balance = Balance * 1.01;
END;
/

-- Scenario 2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(deptId IN NUMBER, bonusPercent IN NUMBER) IS
BEGIN
   UPDATE Employees
   SET Salary = Salary + (Salary * bonusPercent / 100)
   WHERE DepartmentID = deptId;
END;
/

-- Scenario 3
CREATE OR REPLACE PROCEDURE TransferFunds(fromAccountId IN NUMBER, toAccountId IN NUMBER, amount IN NUMBER) IS
   from_balance NUMBER;
BEGIN
   SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = fromAccountId;
   IF from_balance >= amount THEN
      UPDATE Accounts SET Balance = Balance - amount WHERE AccountID = fromAccountId;
      UPDATE Accounts SET Balance = Balance + amount WHERE AccountID = toAccountId;
   ELSE
      RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
   END IF;
END;
/