void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
}

void loop() {
  bool button0 = digitalRead(A0);
  if (button0 == false) {
    digitalWrite(7, HIGH);
    Serial.println("c-0");
  } else {
    digitalWrite(7, LOW);
  }

  bool button1 = digitalRead(A1);
  if (button1 == false) {
    digitalWrite(7, HIGH);
    Serial.println("c-1");
  } else {
    digitalWrite(7, LOW);
  }

  bool button2 = digitalRead(A2);
  if (button2 == false) {
    digitalWrite(7, HIGH);
    Serial.println("c-2");
  } else {
    digitalWrite(7, LOW);
  }

  bool button3 = digitalRead(A3);
  if (button3 == false) {
    digitalWrite(7, HIGH);
    Serial.println("c-3");
  } else {
    digitalWrite(7, LOW);
  }
}
