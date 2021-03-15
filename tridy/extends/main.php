<?php

class Person
{
  //public $name;
  protected function __construct($name)
  {
    $this->name = $name;
  }
  public function bla($bla)
  {
    return $this->name . ' ' . $bla;
  }
}
//inheritance / dědičnost
class Emloyee extends Person
{
  public function __construct($id, $name)
  {
    parent::__construct($name);
    $this->id = $id;
  }
  public function kdo()
  {
    return ' In Emloyee Constructor: ' . $this->id . ' and extends: ' . $this->name;
  }
}

$zakaznik = new Emloyee(123, 'Bob');
