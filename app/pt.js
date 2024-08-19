"use strict";

function main(lines) { 
  let redFlag = 'D';
  let whiteFlag = 'D';

  for (let command of lines) {
    if (command === 'RU') {  // 赤旗を上げる指示
      if (redFlag === 'U') {
        console.log("Alice");
        return;
      }
      redFlag = 'U';
    } else if (command === 'RD') {  // 赤旗を下げる指示
      if (redFlag === 'D') {
        console.log("Alice");
        return;
      }
      redFlag = 'D';
    } else if (command === 'WU') {  // 白旗を上げる指示
      if (whiteFlag === 'U') {
        console.log("Alice");
        return;
      }
      whiteFlag = 'U';
    } else if (command === 'WD') {  // 白旗を下げる指示
      if (whiteFlag === 'D') {
        console.log("Alice");
        return;
      }
      whiteFlag = 'D';
    }
  }

  // 全ての指示が有効であればシモンの勝利
  console.log("Simon");
  console.log(redFlag + whiteFlag);
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", function (chunk) {
    input += chunk;
  });

  process.stdin.on("end", function () {
    const lines = input.trim().split(/\s+/);
    main(lines);
  });
}

runWithStdin();



"use strict";

function main(lines) {
  const [h, a, b] = lines[0].split(' ').map(BigInt);

  let turns = 0n;
  let currentHP = h;

  while (currentHP > 0n) {
    turns++;
    currentHP -= a;
    if (currentHP <= 0n) {
      console.log("YES");
      console.log(turns.toString());
      return;
    }
    currentHP += b;
    
    // 攻撃力が回復量以下なら魔王を倒せない
    if (a <= b) {
      console.log("NO");
      return;
    }
  }
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    input += chunk;
  });

  process.stdin.on("end", () => {
    const lines = input.trim().split("\n");
    main(lines);
  });
}

runWithStdin();


"use strict";

function main(lines) {
  const [h, a, b] = lines[0].split(' ').map(BigInt);

  if (a <= b) {
    console.log("NO");
    return;
  }

  const netDamagePerTurn = a - b;
  const neededTurns = (h + netDamagePerTurn - 1n) / netDamagePerTurn;

  console.log("YES");
  console.log(neededTurns.toString());
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    input += chunk;
  });

  process.stdin.on("end", () => {
    const lines = input.trim().split("\n");
    main(lines);
  });
}

runWithStdin();


"use strict";

function main(lines) {
  const [h, a, b] = lines[0].split(' ').map(BigInt);

  if (a <= b) {
    console.log("NO");
    return;
  }

  let currentHP = h;
  let turns = 0n;

  while (currentHP > 0n) {
    turns++;
    currentHP -= a;
    if (currentHP <= 0n) {
      console.log("YES");
      console.log(turns.toString());
      return;
    }
    currentHP += b;
  }
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    input += chunk;
  });

  process.stdin.on("end", () => {
    const lines = input.trim().split("\n");
    main(lines);
  });
}

runWithStdin();


"use strict";

function main(lines) {
  const [h, a, b] = lines[0].split(' ').map(BigInt);

  if (a <= b) {
    console.log("NO");
    return;
  }

  // a > b が保証された場合、必要なターン数を計算
  let netDamage = a - b;
  let turns = (h - 1n) / netDamage + 1n;

  console.log("YES");
  console.log(turns.toString());
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    input += chunk;
  });

  process.stdin.on("end", () => {
    const lines = input.trim().split("\n");
    main(lines);
  });
}

runWithStdin();



"use strict";

function main(lines) {
  const [h, a, b] = lines[0].split(' ').map(BigInt);

  if (a <= b) {
    console.log("NO");
    return;
  }

  const scale = 1000n; // スケーリングファクター
  const netDamage = (a - b) * scale;
  let turns = (h + netDamage - 1n) / netDamage; // 1000ターン分まとめて計算
  let currentHP = h - (turns * (a - b)); // 1000ターン分計算した後のHP

  // 残りのHPを個別に計算
  while (currentHP > 0n) {
    turns++;
    currentHP -= a;
    if (currentHP <= 0n) {
      console.log("YES");
      console.log(turns.toString());
      return;
    }
    currentHP += b;
  }
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    input += chunk;
  });

  process.stdin.on("end", () => {
    const lines = input.trim().split("\n");
    main(lines);
  });
}

runWithStdin();


"use strict";

function main(lines) {
  const [h, a, b] = lines[0].split(' ').map(BigInt);

  if (a <= b) {
    console.log("NO");
    return;
  }

  // a が b に非常に近い場合はスケーリングを行わない
  if (a - b <= 1n || h < 100000n) {
    let currentHP = h;
    let turns = 0n;

    while (currentHP > 0n) {
      turns++;
      currentHP -= a;
      if (currentHP <= 0n) {
        console.log("YES");
        console.log(turns.toString());
        return;
      }
      currentHP += b;
    }
  } else {
    const scale = 1000n; // スケーリングファクター
    const netDamage = (a - b) * scale;
    let turns = (h + netDamage - 1n) / netDamage; // 1000ターン分まとめて計算
    let currentHP = h - (turns * (a - b)); // 1000ターン分計算した後のHP

    // 残りのHPを個別に計算
    while (currentHP > 0n) {
      turns++;
      currentHP -= a;
      if (currentHP <= 0n) {
        console.log("YES");
        console.log(turns.toString());
        return;
      }
      currentHP += b;
    }
  }
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    input += chunk;
  });

  process.stdin.on("end", () => {
    const lines = input.trim().split("\n");
    main(lines);
  });
}

runWithStdin();


"use strict";

function main(lines) { 
  const [h, a, b] = lines[0].split(' ').map(BigInt);

  if (a <= b) {
    console.log("NO");
    return;
  }

  let currentHP = h;
  let turns = 0n;

  while (currentHP > 0n) {
    turns++;
    currentHP -= a;
    if (currentHP <= 0n) {
      console.log("YES");
      console.log(turns.toString());
      return;
    }
    currentHP += b;
  }
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", v => {
    input += v;
  });

  process.stdin.on("end", () => {
    main(input.split("\n"));
  });
}

runWithStdin();
