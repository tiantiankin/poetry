import { BASE_PATH, DATA } from "./poetry.js";

import * as fs from "fs";

// 读取 poetry.json 的内容,并生成对应的文件
const data = DATA;

function createFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content);
  } catch (err) {
    console.error(err);
  }
}

function getContent(data){
  let result=''
  data.forEach((item)=>{
    result=result+`>${item.sentence}  ${item.name&&item.link?`-- [《${item.name}》](${item.link})\n\n`:'\n\n'}`
  })
  return result
}

for(let langKey in data){
  const lang=data[langKey]
  for(let key in lang){
    const data=lang[key]
    createFile(`${BASE_PATH}/${langKey}/${key}.md`,getContent(data))
  }
}


process.exit();