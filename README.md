# cryptoproperty experiment

This is a crypto experiment to see if Blockchain technology can be used to handle property rentals in a decentralised manner but also stick within the regulatory frameworks that have existed for 1000's of years. 

The token is created solely to hold ownership percentages of the properties. They are NEVER used to prove ownership of said property. Code is most definitely not law. It will never have a value, it will never be listed on an exchange.

You read more about the experiment here  https://docs.google.com/document/d/13vo_9Dj0fM0FXLGgNjBtd34TTjXJ_mWu-tE0ASsCjg0/edit#


The project is split into 3 main areas

# ADMIN

Which has been built in the rather excellent https://strapi.io/

to use it first build the project

yarn strapi build

then start it

npx strapi start

All of the sites are built in the even more excellent eleventy (https://www.11ty.dev/) and allows to host on our CDN (go serverless)

run 

./build.sh local 

this will build the sites with the latest data.

# WWW

This is a simple site that creates a site where you can view the properties. 

# REPORTS

This is another static site that gives a summary report for your investors. 

# TODO

cron(ish) scripts that:
    generate invoices and send them to the renter
    send distributions to the investors of the property 
    sent out emails (reminders and so on)

The ability to register your interest as a renter from the WWW site

Any semblance of a design

