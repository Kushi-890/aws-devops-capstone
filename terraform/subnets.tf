

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.capstone.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "${var.aws_region}a"
  map_public_ip_on_launch = true

  tags = {
    Name                     = "aws-devops-capstone-public-subnet"
    Project                  = "aws-devops-capstone"
    Environment              = "capstone"
    "kubernetes.io/role/elb" = "1"
  }
}

resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.capstone.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "${var.aws_region}a"

  tags = {
    Name                              = "aws-devops-capstone-private-subnet"
    Project                           = "aws-devops-capstone"
    Environment                       = "capstone"
    "kubernetes.io/role/internal-elb" = "1"
  }
}

resource "aws_subnet" "public_b" {
  vpc_id                  = aws_vpc.capstone.id
  cidr_block              = "10.0.3.0/24"
  availability_zone       = "${var.aws_region}b"
  map_public_ip_on_launch = true

  tags = {
    Name                     = "aws-devops-capstone-public-subnet-b"
    Project                  = "aws-devops-capstone"
    Environment              = "capstone"
    "kubernetes.io/role/elb" = "1"
  }
}

resource "aws_subnet" "private_b" {
  vpc_id            = aws_vpc.capstone.id
  cidr_block        = "10.0.4.0/24"
  availability_zone = "${var.aws_region}b"

  tags = {
    Name                              = "aws-devops-capstone-private-subnet-b"
    Project                           = "aws-devops-capstone"
    Environment                       = "capstone"
    "kubernetes.io/role/internal-elb" = "1"
  }
}
