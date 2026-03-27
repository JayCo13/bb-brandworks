const https = require('https');
https.get('https://www.bb-brandworks.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Look for button style classes like .K1Oeqb, .K1Oeqb[data-style="..."] 
    // Wix button class names are complex, let's just search for border-radius
    console.log("border-radius:", data.match(/border-radius:[^;\"']*/g)?.slice(0, 5));
    // Let's also grab the actual HTML. We can see buttons having "border-radius". 
    // Usually, buttons in modern sites have either 0px, 4px, or 50px (pill shape). 
    // Wait, let's fetch the html and save to checking HTML.
    require('fs').writeFileSync('bb.html', data);
  });
});
