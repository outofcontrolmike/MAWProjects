namespace SurveyFormProject3
{/// <summary>
/// This class holds all the generated code for controls added to GUI - Basically creates the controls and their settings
/// </summary>
    partial class SurveryForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.Calendar = new System.Windows.Forms.MonthCalendar();
            this.numUpDown = new System.Windows.Forms.NumericUpDown();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.radPro = new System.Windows.Forms.RadioButton();
            this.radIntermediate = new System.Windows.Forms.RadioButton();
            this.radNovice = new System.Windows.Forms.RadioButton();
            this.ckBxPython = new System.Windows.Forms.CheckBox();
            this.ckBxJavaScript = new System.Windows.Forms.CheckBox();
            this.ckBxCSharp = new System.Windows.Forms.CheckBox();
            this.txtBxName = new System.Windows.Forms.TextBox();
            this.lblName = new System.Windows.Forms.Label();
            this.submitBt = new System.Windows.Forms.Button();
            this.clearBt = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.richTxtBx = new System.Windows.Forms.RichTextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.tipRadioBx = new System.Windows.Forms.ToolTip(this.components);
            this.label5 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDown)).BeginInit();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // Calendar
            // 
            this.Calendar.BackColor = System.Drawing.Color.Coral;
            this.Calendar.Location = new System.Drawing.Point(409, 284);
            this.Calendar.Name = "Calendar";
            this.Calendar.TabIndex = 1;
            // 
            // numUpDown
            // 
            this.numUpDown.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.numUpDown.Location = new System.Drawing.Point(7, 340);
            this.numUpDown.Maximum = new decimal(new int[] {
            10,
            0,
            0,
            0});
            this.numUpDown.Name = "numUpDown";
            this.numUpDown.Size = new System.Drawing.Size(88, 32);
            this.numUpDown.TabIndex = 2;
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.radPro);
            this.groupBox1.Controls.Add(this.radIntermediate);
            this.groupBox1.Controls.Add(this.radNovice);
            this.groupBox1.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.groupBox1.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox1.Location = new System.Drawing.Point(198, 135);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(177, 125);
            this.groupBox1.TabIndex = 3;
            this.groupBox1.TabStop = false;
            // 
            // radPro
            // 
            this.radPro.AutoSize = true;
            this.radPro.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.radPro.Location = new System.Drawing.Point(0, 95);
            this.radPro.Name = "radPro";
            this.radPro.Size = new System.Drawing.Size(60, 28);
            this.radPro.TabIndex = 2;
            this.radPro.Text = "4++";
            this.radPro.UseVisualStyleBackColor = true;
            // 
            // radIntermediate
            // 
            this.radIntermediate.AutoSize = true;
            this.radIntermediate.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.radIntermediate.Location = new System.Drawing.Point(0, 48);
            this.radIntermediate.Name = "radIntermediate";
            this.radIntermediate.Size = new System.Drawing.Size(107, 28);
            this.radIntermediate.TabIndex = 1;
            this.radIntermediate.Text = "1-4 Years";
            this.radIntermediate.UseVisualStyleBackColor = true;
            // 
            // radNovice
            // 
            this.radNovice.AutoSize = true;
            this.radNovice.Checked = true;
            this.radNovice.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.radNovice.Location = new System.Drawing.Point(0, 0);
            this.radNovice.Name = "radNovice";
            this.radNovice.Size = new System.Drawing.Size(107, 28);
            this.radNovice.TabIndex = 0;
            this.radNovice.TabStop = true;
            this.radNovice.Text = "0-1 Years";
            this.radNovice.UseVisualStyleBackColor = true;
            // 
            // ckBxPython
            // 
            this.ckBxPython.AutoSize = true;
            this.ckBxPython.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ckBxPython.Location = new System.Drawing.Point(9, 147);
            this.ckBxPython.Name = "ckBxPython";
            this.ckBxPython.Size = new System.Drawing.Size(87, 28);
            this.ckBxPython.TabIndex = 4;
            this.ckBxPython.Text = "Python";
            this.ckBxPython.UseVisualStyleBackColor = true;
            // 
            // ckBxJavaScript
            // 
            this.ckBxJavaScript.AutoSize = true;
            this.ckBxJavaScript.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ckBxJavaScript.Location = new System.Drawing.Point(9, 188);
            this.ckBxJavaScript.Name = "ckBxJavaScript";
            this.ckBxJavaScript.Size = new System.Drawing.Size(114, 28);
            this.ckBxJavaScript.TabIndex = 5;
            this.ckBxJavaScript.Text = "JavaScript";
            this.ckBxJavaScript.UseVisualStyleBackColor = true;
            // 
            // ckBxCSharp
            // 
            this.ckBxCSharp.AutoSize = true;
            this.ckBxCSharp.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ckBxCSharp.Location = new System.Drawing.Point(9, 229);
            this.ckBxCSharp.Name = "ckBxCSharp";
            this.ckBxCSharp.Size = new System.Drawing.Size(52, 28);
            this.ckBxCSharp.TabIndex = 6;
            this.ckBxCSharp.Text = "C#";
            this.ckBxCSharp.UseVisualStyleBackColor = true;
            // 
            // txtBxName
            // 
            this.txtBxName.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtBxName.Location = new System.Drawing.Point(206, 41);
            this.txtBxName.Name = "txtBxName";
            this.txtBxName.Size = new System.Drawing.Size(178, 32);
            this.txtBxName.TabIndex = 7;
            this.txtBxName.TabStop = false;
            // 
            // lblName
            // 
            this.lblName.AutoSize = true;
            this.lblName.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblName.Location = new System.Drawing.Point(3, 41);
            this.lblName.Name = "lblName";
            this.lblName.Size = new System.Drawing.Size(197, 26);
            this.lblName.TabIndex = 8;
            this.lblName.Text = "Enter Your Name";
            // 
            // submitBt
            // 
            this.submitBt.BackColor = System.Drawing.Color.BurlyWood;
            this.submitBt.FlatAppearance.BorderColor = System.Drawing.Color.White;
            this.submitBt.FlatAppearance.CheckedBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(192)))), ((int)(((byte)(0)))), ((int)(((byte)(0)))));
            this.submitBt.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.submitBt.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.submitBt.Location = new System.Drawing.Point(409, 458);
            this.submitBt.Name = "submitBt";
            this.submitBt.Size = new System.Drawing.Size(97, 68);
            this.submitBt.TabIndex = 9;
            this.submitBt.Text = "Submit";
            this.submitBt.UseVisualStyleBackColor = false;
            this.submitBt.Click += new System.EventHandler(this.SubmitBt_Click);
            // 
            // clearBt
            // 
            this.clearBt.BackColor = System.Drawing.Color.BurlyWood;
            this.clearBt.FlatAppearance.BorderColor = System.Drawing.Color.White;
            this.clearBt.FlatAppearance.BorderSize = 4;
            this.clearBt.FlatAppearance.CheckedBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(192)))), ((int)(((byte)(0)))), ((int)(((byte)(0)))));
            this.clearBt.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.clearBt.Location = new System.Drawing.Point(534, 458);
            this.clearBt.Name = "clearBt";
            this.clearBt.Size = new System.Drawing.Size(97, 68);
            this.clearBt.TabIndex = 10;
            this.clearBt.Text = "Clear Form";
            this.clearBt.UseVisualStyleBackColor = false;
            this.clearBt.Click += new System.EventHandler(this.ClearBt_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(4, 293);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(258, 24);
            this.label2.TabIndex = 11;
            this.label2.Text = "Rank Yourself 1 -10 In Skill";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(7, 389);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(179, 26);
            this.label3.TabIndex = 12;
            this.label3.Text = "Your Summary:";
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.pictureBox1.Image = global::SurveyFormProject3.Properties.Resources.NinjaGiff;
            this.pictureBox1.Location = new System.Drawing.Point(409, 27);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(227, 214);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.PictureBox1_Click);
            // 
            // richTxtBx
            // 
            this.richTxtBx.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.richTxtBx.Location = new System.Drawing.Point(8, 430);
            this.richTxtBx.Name = "richTxtBx";
            this.richTxtBx.ReadOnly = true;
            this.richTxtBx.Size = new System.Drawing.Size(390, 96);
            this.richTxtBx.TabIndex = 13;
            this.richTxtBx.Text = "";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(3, 110);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(183, 24);
            this.label1.TabIndex = 14;
            this.label1.Text = "Languages Known";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(198, 110);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(200, 24);
            this.label4.TabIndex = 15;
            this.label4.Text = "Years of Experience";
            // 
        
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(431, 255);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(187, 20);
            this.label5.TabIndex = 16;
            this.label5.Text = "Experience Start Date";
            // 
            // SurveryForm
            // 
            this.AcceptButton = this.submitBt;
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.InactiveCaption;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.ClientSize = new System.Drawing.Size(640, 529);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.richTxtBx);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.clearBt);
            this.Controls.Add(this.submitBt);
            this.Controls.Add(this.lblName);
            this.Controls.Add(this.txtBxName);
            this.Controls.Add(this.ckBxCSharp);
            this.Controls.Add(this.ckBxJavaScript);
            this.Controls.Add(this.ckBxPython);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.numUpDown);
            this.Controls.Add(this.Calendar);
            this.ForeColor = System.Drawing.SystemColors.ControlText;
            this.Name = "SurveryForm";
            this.Text = "Programming Survey";
            this.Load += new System.EventHandler(this.SurveryForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.numUpDown)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.MonthCalendar Calendar;
        private System.Windows.Forms.NumericUpDown numUpDown;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.CheckBox ckBxPython;
        private System.Windows.Forms.CheckBox ckBxJavaScript;
        private System.Windows.Forms.CheckBox ckBxCSharp;
        private System.Windows.Forms.TextBox txtBxName;
        private System.Windows.Forms.Label lblName;
        private System.Windows.Forms.Button submitBt;
        private System.Windows.Forms.Button clearBt;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.RichTextBox richTxtBx;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.RadioButton radNovice;
        private System.Windows.Forms.RadioButton radPro;
        private System.Windows.Forms.RadioButton radIntermediate;
        private System.Windows.Forms.ToolTip tipRadioBx;
        private System.Windows.Forms.Label label5;
    }// end of class
}// end of namespace

