# CELEBRITY BIRTHDAYS
###### Created by: Salem Ezz, Rocco Patrick, Michael Bloom

Welcome! This is an Express app running within a Docker container that is able to maintain a database of celebrities and their birthdays, if they're having a party this year, their astrological sign and Zodiac animal. It has been loaded with 10 famous celebrities as a basis/example of the database.

###### Required Elements
> Express
> 
> Container for the Postgres Database
> >Docker
> 
> Dotenv
>
> Knex
> 
> Morgan


***A .ENV file will need to be created in order for this app to work.*** The .DOT file should contain the login information for your Postgres Server in order for this records to be correctly manipulated or accessed.

The application follows the CRUDL methodology is can be updated via HTTP requests.  Additionally, you are able to query a specific celebrity within the database by [*BIRTHDAYS/NAME || BIRTHDAYS/FIRST_NAME%20LAST_NAME*] or by any of the other data entries by [*BIRTHDAYS?astrology_id={atrology_id from atrology table}*] as well as additional parameters with an & [*BIRTHDAYS?astrology_id={atrology_id from atrology table}&PARTY_THIS_YEAR={TRUE OR FALSE}*].