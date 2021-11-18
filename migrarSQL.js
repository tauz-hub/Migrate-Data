import fs from 'fs';
import database from 'quick.db';

const jsonData = JSON.parse(fs.readFileSync('./newData.json'));
const guildIdDatabase = new database.table(`guild_id_789888698673922078`);

jsonData.forEach((user) => {
  const { description } = user;

  description.forEach((warn) => {
    if (guildIdDatabase.has(`user_id_${user.id}`)) {
      guildIdDatabase.push(`user_id_${user.id}.autor`, warn.autor);
      guildIdDatabase.push(`user_id_${user.id}.reasons`, warn.reason);
      guildIdDatabase.push(`user_id_${user.id}.dataReasonsWarns`, warn.date);
    } else {
      guildIdDatabase.set(`user_id_${user.id}`, {
        id: user.id,
        reasons: [warn.reason],
        autor: [warn.autor],
        dataReasonsWarns: [warn.date],
      });
    }
  });
  console.log(`copiado processo: ${user.id}`);
});

console.log('sucess');
