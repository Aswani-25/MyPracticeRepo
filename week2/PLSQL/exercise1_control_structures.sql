-- Create and Insert Statements for Control Structures

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE
);

INSERT INTO Customers VALUES (1, 'Aarav Sharma', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Sneha Patel', 45, 9500, 'FALSE');
INSERT INTO Customers VALUES (3, 'Ravi Verma', 70, 12000, 'FALSE');

INSERT INTO Loans VALUES (101, 1, 9.5, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, 10.0, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, 8.5, SYSDATE + 5);

-- Exercise 1: Control Structures

-- Scenario 1
BEGIN
   UPDATE Loans
   SET InterestRate = InterestRate - 1
   WHERE CustomerID IN (
      SELECT CustomerID FROM Customers WHERE Age > 60
   );
   DBMS_OUTPUT.PUT_LINE('Scenario 1: 1% discount applied to senior citizen customers.');
END;
/

-- Scenario 2
BEGIN
   UPDATE Customers
   SET IsVIP = 'TRUE'
   WHERE Balance > 10000;
   DBMS_OUTPUT.PUT_LINE('Scenario 2: VIP status updated for eligible customers.');
END;
/

-- Scenario 3
DECLARE
   due_count NUMBER;
BEGIN
   SELECT COUNT(*) INTO due_count
   FROM Loans
   WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;
   DBMS_OUTPUT.PUT_LINE('Scenario 3: ' || due_count || ' loan(s) are due within 30 days.');
END;
/