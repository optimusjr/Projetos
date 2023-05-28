void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
}

void loop() {
  bool button0 = digitalRead(A0);
  if (button0 == false) {
    Serial.println("c-0");
  }

  bool button1 = digitalRead(A1);
  if (button1 == false) {
    Serial.println("c-1");
  }

  bool button2 = digitalRead(A2);
  if (button2 == false) {
    Serial.println("c-2");
  }

  bool button3 = digitalRead(A3);
  if (button3 == false) {
    Serial.println("c-3");
  }
}
