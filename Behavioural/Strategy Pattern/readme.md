# Payment Service Implementation - Strategy Design Pattern Example

This provides an implementation of a Payment Service using the Strategy Design Pattern in TypeScript. This design pattern enables selecting algorithms at runtime, allowing for easy extension and maintenance of payment methods in a scalable manner.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Strategy Design Pattern Explained](#strategy-design-pattern-explained)

## Overview

The Strategy Design Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. This implementation demonstrates how different payment methods can be handled using a common interface, making it easy to add new payment methods without altering the existing codebase.

## Features

- **Flexible Payment Methods**: Supports multiple payment methods such as UPI and Debit Card.
- **Scalable Architecture**: New payment methods can be added easily by implementing the `PaymentStrategy` interface.
- **Asynchronous Payment Processing**: Utilizes Promises for asynchronous handling of payments.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/Prithwish10/Design-Patterns-using-Typescript.git
cd '.\Design-Patterns-using-Typescript\Behavioural\Strategy Pattern\'
```
If you are on VSCode the you can install the **Draw.io** extension.

## Strategy Design Pattern Explained

The Strategy Pattern allows you to define a set of algorithms (in this case, payment methods), encapsulate each one, and make them interchangeable.

**Key Components:**
- PaymentStrategy Interface: Defines the common interface for all payment methods. Each payment method implements this interface.

**Concrete Payment Strategies:**
- Classes like UpiPayment and DebitCardPayment implement the PaymentStrategy interface, providing specific logic for processing payments.

**ShoppingCart:**
- This class uses a PaymentStrategy to perform the payment. It can switch between different strategies dynamically, facilitating runtime flexibility.

**Benefits of Using the Strategy Pattern:**
- Open/Closed Principle: The system is open for extension (new payment methods) but closed for modification (no changes to existing code).
- Maintainability: Adding new payment methods requires minimal changes to the existing codebase.
