import AWS from 'aws-sdk';

const AWS_ACCESS_KEY_ID = 'ASIA4N6WZ2D3DHNK7XAU';
const AWS_SECRET_ACCESS_KEY = 'H75ms0CopHFW6eNsL5AnW0+BFTg7X938gXRSdLoy';
const AWS_SESSION_TOKEN = 'FwoGZXIvYXdzEBsaDMVjPYeBFiSrN35GNyLZAXHdEyHivXQBtZ2RzhwIaPvu72RMg0PSBNh9LYMON99Ux8bHwTZyIDBOEDdtdDte9IclNppE+hx/pNerBBW2f7eDYUS4VOVDO9FapYRN2CetU3B16XMVSXywszoVT3/Pv2y8k7v3RlA3xHJs6ZSkkEmHSDGr1MizGtaz4JMYRnrTJYDS0LQV4CEpQ91BJ+2y7eMUHRC/dLIjJAsvfa3pAM3IfXXyyGi3aZVmGtJCjq4NRNhTHIRHcOjgJXiPei9S0jxGD3lll5Bc/IZAqVEFBPtw1LRvuUMKJAoooNGA/AUyLYfx+bXt6Y127Oxq+jsiuXOBrvDGzJiSf949yvpnE/mP0zlJWFUekRudTWvFHA';
const AWS_REGION = 'us-east-1';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  sessionToken: AWS_SESSION_TOKEN,
  region: AWS_REGION,
});

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:fe413ca7-b988-44e6-9e9a-a5fb1f9b9476',
});

const lexruntime = new AWS.LexRuntime();

const lexSendText = (inputText) => {
  const lexUserId = `userid${Date.now()}`;

  const params = {
    botAlias: 'weatherbot',
    botName: 'weatherbot',
    userId: lexUserId,
    inputText,
    sessionAttributes: {},
  };

  return new Promise((resolve, reject) => {
    lexruntime.postText(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.message);
    });
  });
};

export default lexSendText;
