#pragma strict

private var animator : Animator;

function Start () {
	animator = GetComponent.<Animator>();
}

function Update () {
	animator.SetFloat("X", 2.0 * Input.mousePosition.x / Screen.width - 1.0);
	animator.SetFloat("Y", 2.0 * Input.mousePosition.y / Screen.height - 1.0);
}
