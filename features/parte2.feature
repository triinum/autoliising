@testLease
Feature: Testing the lease application
	AS a  client
	I'd like to fill in the car lease form
	and assume calculations are correct

	@Happy path
	Scenario: Search with correct data		
        Given You are on leasing main page
         When You move on to leasing application
         Then You start filling in the details
         When You establish price with VAT as "5000"
         When You fill in initial percentage as "20" and duration in years
         Then You choose duration for five years
          When You choose payment date and set reminder percentage as "20"
         Then You choose payment day of the 15th
         When You click to continue
  
          




	@TriinuM @Non-happy path
	Scenario: Search with incorrect data		
        Given You are on leasing main page
         When You move on to leasing application
         Then You start filling in the details
         When You establish price with VAT as "5000"
         When You fill in initial percentage as "20" and duration in years
         Then You choose duration for five years
         When You choose payment date and set reminder percentage as "20"
         Then You choose payment day of the 15th
         When You click to continue