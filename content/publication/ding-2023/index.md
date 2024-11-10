---
title: Parameter-efficient fine-tuning of large-scale pre-trained language models
authors:
- Ning Ding
- Yujia Qin
- Guang Yang
- Fuchao Wei
- Zonghan Yang
- Yusheng Su
- Shengding Hu
- Yulin Chen
- Chi-Min Chan
- Weize Chen
- Jing Yi
- Weilin Zhao
- Xiaozhi Wang
- Zhiyuan Liu
- Hai-Tao Zheng
- Jianfei Chen
- Yang Liu
- Jie Tang
- Juanzi Li
- Maosong Sun
date: '2023-03-01'
publishDate: '2024-11-10T06:19:14.082768Z'
publication_types:
- article-journal
publication: '*Nature Machine Intelligence*'
doi: 10.1038/s42256-023-00626-4
abstract: With the prevalence of pre-trained language models (PLMs) and the pre-training--fine-tuning
  paradigm, it has been continuously shown that larger models tend to yield better
  performance. However, as PLMs scale up, fine-tuning and storing all the parameters
  is prohibitively costly and eventually becomes practically infeasible. This necessitates
  a new branch of research focusing on the parameter-efficient adaptation of PLMs,
  which optimizes a small portion of the model parameters while keeping the rest fixed,
  drastically cutting down computation and storage costs. In general, it demonstrates
  that large-scale models could be effectively stimulated by the optimization of a
  few parameters. Despite the various designs, here we discuss and analyse the approaches
  under a more consistent and accessible term `delta-tuning', where `delta' a mathematical
  notation often used to denote changes, is borrowed to refer to the portion of parameters
  that are `changed' during training. We formally describe the problem and propose
  a unified categorization criterion for existing delta-tuning methods to explore
  their correlations and differences. We also discuss the theoretical principles underlying
  the effectiveness of delta-tuning and interpret them from the perspectives of optimization
  and optimal control. Furthermore, we provide a holistic empirical study on over
  100 natural language processing tasks and investigate various aspects of delta-tuning.
  With comprehensive study and analysis, our research demonstrates the theoretical
  and practical properties of delta-tuning in the adaptation of PLMs.
links:
- name: URL
  url: https://doi.org/10.1038/s42256-023-00626-4
---
