resource "aws_eks_node_group" "capstone" {
  cluster_name    = aws_eks_cluster.capstone.name
  node_group_name = "capstone-workers"
  node_role_arn   = var.eks_node_role_arn

  subnet_ids = [
    aws_subnet.public.id,
    aws_subnet.public_b.id
  ]

  instance_types = ["t3.small"]
  capacity_type  = "ON_DEMAND"
  disk_size      = 20

  scaling_config {
    desired_size = 1
    max_size     = 1
    min_size     = 1
  }

  labels = {
    role = "capstone-worker"
  }

  tags = {
    Project     = "aws-devops-capstone"
    Environment = "capstone"
  }
}