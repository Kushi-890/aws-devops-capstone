resource "aws_eks_cluster" "capstone" {
  name     = "aws-devops-capstone-eks"
  role_arn = var.eks_cluster_role_arn
  version  = "1.36"

  vpc_config {
    subnet_ids = [
      aws_subnet.private.id,
      aws_subnet.private_b.id
    ]

    endpoint_private_access = true
    endpoint_public_access  = true
    public_access_cidrs     = var.eks_public_access_cidrs
  }

  tags = {
    Name        = "aws-devops-capstone-eks"
    Project     = "aws-devops-capstone"
    Environment = "capstone"
  }
}