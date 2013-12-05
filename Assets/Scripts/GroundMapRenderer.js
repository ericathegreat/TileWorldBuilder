#pragma strict

public var groundMap : GroundMap;
public var tileLookup : Transform[];
public var tileOffsetX : float;
public var tileOffsetZ : float;

function Start () {
	DrawMap();
}

function DrawMap() {
	for(var i=0; i<groundMap.map.length; i++)
	{
		for(var j=0; j<groundMap.map[i].length; j++)
		{
			var newTilePrefab : Transform = tileLookup[groundMap.map[i][j]];
			var newTile : Transform = Instantiate(newTilePrefab, Vector3(i * tileOffsetX, this.transform.position.y, j * tileOffsetZ),Quaternion.identity);
		}
	}
}

function Update () {

}