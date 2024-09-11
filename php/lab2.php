<?php
function printResult($number, callable $expr) {
  echo " #" . $number . "\n";
  $expr();
  echo "\n\n";
}

function printArray($array, $end = "") {
  print_r($array);
  echo $end;
}

printResult(1, 
  function () {
    $array = ['Привет, ', 'мир',  '!'];
    foreach($array as $x) {
      echo $x;
    }
  }
);

printResult(2, 
  function () {
    $array = ['Привет, ', 'мир',  '!'];
    $array[0] = 'Пока, ';
    print_r($array);
  }
);

printResult(3, 
  function () {
    $str = '023m0df0dfg0';
    $array = array();
    foreach(str_split($str) as $i => $c) {
      if ($c == '0') {
        array_push($array, $i);
      }
    }
    printArray($array);
  }
);

printResult(4,
  function () {
    $arr1 = array();
    foreach(range(0, 10) as $i) {
      array_push($arr1, mt_rand());
    }
    printArray($arr1, "\n");
    $arr2 = array();
    foreach ($arr1 as $x) {
        if (str_contains(strval($x), '25')) {
            array_push($arr2, $x);
        }
    }
    printArray($arr2);
  }
);

printResult(5,
  function () {
    function mergeArrays($arr1, $arr2) {
      $result = array();
      if (count($arr1) == count($arr2)) {
        for ($i = 0; $i < count($arr1); ++$i) {
          array_push($result, $arr1[$i], $arr2[$i]);
        }
      }
      return $result;
    }
    $arr1 = [1, 2, 3];
    $arr2 = ['a', 'b', 'c'];
    $res = mergeArrays($arr1, $arr2);
    printArray($arr1, "\n");
    printArray($arr2, "\n");
    printArray($res);
  }
);

printResult(6,
  function () {
    $arr1 = array();
    foreach(range(0, 10) as $i) {
      array_push($arr1, mt_rand());
    }
    printArray($arr1, "\n");
    rsort($arr1);
    printArray($arr1);
  }
);

printResult(7,
  function () {
    $ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    $En = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    sort($ru);
    sort($En);
    printArray($ru, "\n");
    printArray($En);
  }
);

printResult(8,
  function () {
    $arr = ['orange', 'red', 'green', 'blue'];
    usort($arr,
      function ($s1, $s2) {
        $s1l = strlen($s1);
        $s2l = strlen($s2);
        if ($s1l == $s2l) return 0;
        return $s1l > $s2l ? -1 : 1;
      }
    );
    printArray($arr);
  }
);

printResult(9,
  function () {
    $arr = array();
    foreach(range(0, 8) as $i) {
      array_push($arr, mt_rand(0, 50));
    }
    printArray($arr, "\n");
    $dividend = 0;
    $divisor = 0;
    for ($i = 0; $i < 8; ++$i) {
      if ($i < 4) {
        $dividend += $arr[$i];
      } else {
        $divisor += $arr[$i];
      }
    }
    $result = $dividend / $divisor;
    echo $dividend . "\n";
    echo $divisor . "\n";
    echo $result;
  }
);

printResult(10,
  function () {
    $arr = array();
    foreach(range(0, 10) as $i) {
      array_push($arr, mt_rand(-100, 100));
    }
    printArray($arr, "\n");
    $neg_count = 0;
    foreach($arr as $x) {
      if ($x < 0) {
        ++$neg_count;
      }
    }
    echo $neg_count;
  }
);

printResult(11,
  function () {
    $arr = array();
    foreach(range(0, 10) as $i) {
      array_push($arr, mt_rand(-50, 50));
    }
    printArray($arr, "\n");
    foreach($arr as $i => $x) {
      if ($x < 0) {
        unset($arr[$i]);
      } else {
        if ($x % 2 == 1) {
          unset($arr[$i]);
        }
      }
    }
    $arr = array_values($arr);
    printArray($arr, "\n");
  }
);

printResult(12,
  function () {
    $str = "v3ni v1d1 v1c1";
    $first = 0;
    $last = 0;
    $isFirst = true;
    foreach(str_split($str) as $i => $x) {
      if (is_numeric($x)) {
        if ($isFirst) {
          $first = $i + 1;
          $isFirst = false;
        } else {
          $last = $i + 1;
        }
      }
    }
    echo $str . "\n";
    echo $first . "\n";
    echo $last . "\n";
  }
);

?>
