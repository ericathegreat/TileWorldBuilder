#pragma strict

var movementSpeed : float = 1.0;

function Start () {

}

function Update () {
	var cameraMove = Input.GetAxis ("Horizontal");
	if (cameraMove == -1) {
		this.transform.position.x -= movementSpeed;
		this.transform.position.z += movementSpeed;
	}
	if (cameraMove == 1) {
		this.transform.position.x += movementSpeed;
		this.transform.position.z -= movementSpeed;
	}
	
	cameraMove = Input.GetAxis ("Vertical");
	if (cameraMove == -1) {
		this.transform.position.y -= movementSpeed;
	}
	if (cameraMove == 1) {
		this.transform.position.y += movementSpeed;
	}
}