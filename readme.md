# HTTPS server example

sample project created to learn how to use https with node.js and express

Firstly Create an SSL Certificate with openssl and save it somewhere handy

<code>$ openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365</code>

If errors are occuring remove the pass with:

<code>$ openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem</code>

Note: As the certificate is self signed it will not be trusted, and hence will get a big red lock in browsers

Acquire a trusted certificate with <a href="https://certbot.eff.org/">certbot</a>
