# Pull Data From Different Sheets to One Sheet Using Apps Script

This project shows how to use Google Apps Script to pull in data from various sheets into a single sheet and remove duplicates.

## The Motivation for this Project

Whenever you have data in multiple sheets and you want to have it all on one main sheet, it may involve a lot of manual work. This is especially tiring if the sheets you are collecting data from have different number of rows.

If one were to do this exercise manually, they would have to follow these steps:

1. Go to each sheet and copy the data to the main sheet
2. Select the column in the main sheet where you have added the data and remove duplicates
3. After a while when you add a new sheet with more data, you need to copy data from that one sheet and append it to the data on the main sheet and remove duplicates
4. If you forget till which sheet you have copied data to the main sheet, you have to clear the main sheet and start over from step 1

## The Solution this Project Offers

Using Apps Script, we can automatically:

1. Get all the names of the sheets in the spreadsheet into a list
2. Remove the name of the main sheet from the list derived in step 1
3. Collect data from the list of sheets derived from step 2
4. Add the data from step 3 into the main sheet
5. Remove duplicates from the main sheet
