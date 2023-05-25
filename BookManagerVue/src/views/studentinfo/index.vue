<template>
  <div class="student-form">
    <el-form ref="form" :model="student" label-width="120px" :rules="rules">
      <el-form-item label="学号">
        <el-input v-model="student.studentId" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="student.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="student.gender">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生年月" prop="birthdate">
        <el-date-picker v-model="student.birthdate" type="date"></el-date-picker>
      </el-form-item>
      <el-form-item label="班级" prop="class">
        <el-input v-model="student.class"></el-input>
      </el-form-item>
      <el-form-item label="学院" prop="college">
        <el-input v-model="student.college"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveForm">保存</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        studentId: '20210001',
        name: '冉耀华',
        gender: '男',
        birthdate: '2001/01/06',
        class: '计算机科学与技术',
        college: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthdate: [
          { required: true, message: '请选择出生年月', trigger: 'change' }
        ],
        class: [
          { required: true, message: '请输入班级', trigger: 'blur' }
        ],
        college: [
          { required: true, message: '请输入学院', trigger: 'blur' }
        ]
      }
    };
  },
  created() { // 页面渲染之前执行
      this.init()
  },
  methods: {
    init() {
      // 判断路径有id值,做修改
      if (this.$route.params && this.$route.params.id) {
          // 从路径获取id值
          const id = this.$route.params.id
          // 调用根据id查询的方法
          this.getStudentInfo(id)
      } else { // 路径没有id值，做添加
        // 清空表单
        this.student = {}
      }
    },
    saveForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 在这里执行保存逻辑
          console.log('保存学生信息', this.student);
          student.updateStudent(this.student).then(res => {
            // 提示信息
            this.$message({
                type: 'success',
                message: '修改成功!'
            })
          })
        } else {
          console.log('表单校验失败');
          return false;
        }
      });
    },
    getStudentInfo(id) {
      // 模拟异步获取学生信息的过程，这里可以根据实际情况进行修改
      student.getStudent(id)
        .then(response => {
          this.student = response.data.student
        })
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
