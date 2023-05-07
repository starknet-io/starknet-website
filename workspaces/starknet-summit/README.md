# starknet-summit

# Install dependencies:

yarn

# Run locally:

yarn dev

# Build for prod

yarn build

# Airtable

Create an Airtable account and create a new base to store newsletter subscribers. Add a table called "Subscribers" and add field Email and set it as type Email.

Go to Account Settings and create Personal Access Token. Replace it in .env:
VITE_PERSONAL_ACCESS_TOKEN=YOUR_TOKEN_HERE

Find your airtable base id in url of your app: 
for example: 'https://airtable.com/ *appxxxxxxxxxxxxx/* ' and replace it in .env:
VITE_BASE_ID=BASE_ID_HERE

Finally, since we called table subscribers, in .env:
VITE_AIRTABLE_DB_NAME=Subscribers

But you can change to anything you want.



