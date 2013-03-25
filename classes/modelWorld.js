var modelWorld = {
	F: {},
	S: {},
	
	draw: function(){
		gl.uniform1i(shaderProgram.useTexturesUniform, false);
		//Draw F
		gl.bindBuffer(gl.ARRAY_BUFFER, this.F.vertexTextureCoordBuffer);
		gl.vertexAttribPointer(shaderProgram.textureLocation, this.F.vertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.F.vertexPositionBuffer);
		gl.vertexAttribPointer(shaderProgram.positionLocation,this.F.vertexPositionBuffer.itemSize,gl.FLOAT,false,0,0);
		
		gl.uniform4f(shaderProgram.colorLocation, 0, 1, 0, 1);
		gl.drawArrays(gl.TRIANGLES, 0, this.F.vertexPositionBuffer.numItems);

		//Draw box
		gl.bindBuffer(gl.ARRAY_BUFFER, this.S.vertexTextureCoordBuffer);
		gl.vertexAttribPointer(shaderProgram.textureLocation, this.S.vertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.S.vertexPositionBuffer);
		gl.vertexAttribPointer(shaderProgram.positionLocation,this.S.vertexPositionBuffer.itemSize,gl.FLOAT,false,0,0);
		
		gl.uniform4f(shaderProgram.colorLocation, 0, 1, 1, 1);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.S.vertexIndexBuffer);
		gl.drawElements(gl.TRIANGLES, this.S.vertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
	},

	init: function(){
		this.F.vertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER,this.F.vertexPositionBuffer);
		gl.bufferData(
		  gl.ARRAY_BUFFER,
		  new Float32Array([
		    0,0,0,    30,0,0,   0,150,0,
		    0,150,0,  30,0,0,   30,150,0,
		    30,0,0,   100,0,0,  30,30,0,
		    30,30,0,  100,0,0,  100,30,0,
		    30,60,0,  67,60,0,  30,90,0,
		    30,90,0,  67,60,0,  67,90,0,
		    0,0,30,   30,0,30,  0,150,30,
		    0,150,30, 30,0,30,  30,150,30,
		    30,0,30,  100,0,30, 30,30,30,
		    30,30,30, 100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,30,30,30,60,30,30,30,0,30,60,30,30,60,0,30,60,0,30,60,30,67,60,30,30,60,0,67,60,30,67,60,0,67,60,0,67,60,30,67,90,30,67,60,0,67,90,30,67,90,0,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,90,30,30,150,30,30,90,0,30,150,30,30,150,0,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0]),
		  gl.STATIC_DRAW);
		this.F.vertexPositionBuffer.itemSize = 3;
		this.F.vertexPositionBuffer.numItems = 96;

		this.F.vertexTextureCoordBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.F.vertexTextureCoordBuffer);
		gl.bufferData(
		  gl.ARRAY_BUFFER,
		  new Float32Array(192),
		  gl.STATIC_DRAW);
		this.F.vertexTextureCoordBuffer.itemSize = 2;
		this.F.vertexTextureCoordBuffer.numItems = 96;

		this.S.vertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.S.vertexPositionBuffer);
		gl.bufferData(
		  gl.ARRAY_BUFFER,
		  new Float32Array([
		    
		    // Front face
		    -50.0, -50.0,  50.0,
		    50.0, -50.0,  50.0,
		    50.0,  50.0,  50.0,
		    -50.0,  50.0,  50.0,

		    // Back face
		    -50.0, -50.0, -50.0,
		    -50.0,  50.0, -50.0,
		    50.0,  50.0, -50.0,
		    50.0, -50.0, -50.0,

		    // Top face
		    -50.0,  50.0, -50.0,
		    -50.0,  50.0,  50.0,
		    50.0,  50.0,  50.0,
		    50.0,  50.0, -50.0,

		    // Bottom face
		    -50.0, -50.0, -50.0,
		    50.0, -50.0, -50.0,
		    50.0, -50.0,  50.0,
		    -50.0, -50.0,  50.0,

		    // Right face
		    50.0, -50.0, -50.0,
		    50.0,  50.0, -50.0,
		    50.0,  50.0,  50.0,
		    50.0, -50.0,  50.0,

		    // Left face
		    -50.0, -50.0, -50.0,
		    -50.0, -50.0,  50.0,
		    -50.0,  50.0,  50.0,
		    -50.0,  50.0, -50.0,
		    ]),
		  gl.STATIC_DRAW);
		this.S.vertexPositionBuffer.itemSize = 3;
		this.S.vertexPositionBuffer.numItems = 24;

		this.S.vertexTextureCoordBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.S.vertexTextureCoordBuffer);
		gl.bufferData(
		  gl.ARRAY_BUFFER,
		  new Float32Array(48),
		  gl.STATIC_DRAW);
		this.S.vertexTextureCoordBuffer.itemSize = 2;
		this.S.vertexTextureCoordBuffer.numItems = 24;

		this.S.vertexIndexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.S.vertexIndexBuffer);
		var cubeVertexIndices = [
		    0, 1, 2,      0, 2, 3,    // Front face
		    4, 5, 6,      4, 6, 7,    // Back face
		    8, 9, 10,     8, 10, 11,  // Top face
		    12, 13, 14,   12, 14, 15, // Bottom face
		    16, 17, 18,   16, 18, 19, // Right face
		    20, 21, 22,   20, 22, 23  // Left face
		]
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
		this.S.vertexIndexBuffer.itemSize = 1;
		this.S.vertexIndexBuffer.numItems = 36;
	},
}